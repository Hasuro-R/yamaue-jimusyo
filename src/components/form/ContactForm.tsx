"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./form.module.scss";
import { ContactFormInputType } from "@/types/contactForm";
import { useRouter } from "next/navigation";
import { emailRegex } from "@/lib/regex";

export default function ContactForm() {
  const router = useRouter();

  const [formValues, setFormValues] = useState<ContactFormInputType>({
    name: "",
    email: "",
    body: "",
  });
  const [height, setHeight] = useState('auto');
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textareaRef = useRef<any>(null);

  const isDisabledSend = formValues.name === "" || !emailRegex.test(formValues.email) || formValues.body === "";

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const element = textareaRef.current;
    setFormValues({...formValues, body: e.target.value});

    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    setHeight(`${element.scrollHeight}px`);
  };

  const handleSend = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch('api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formValues.name,
        email: formValues.email,
        body: formValues.body,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        router.push('/');
      } else {
        setIsLoading(false);
      };
    });
  };

  useEffect(() => {
    if (textareaRef.current) {
      const element = textareaRef.current;
      element.focus();
    }
  }, []);

  return (
    <div className={styles["form"]}>
      <div className={styles["form-cn"]}>
        <div className={styles["label-cn"]}>
          <p className={styles["label"]}>お名前</p>
        </div>
        <div className={styles["input-cn"]}>
          <input
            className={styles["input"]}
            placeholder="山田 太郎"
            type="text"
            value={formValues.name}
            onChange={(e) => setFormValues({...formValues, name: e.target.value})}
          />
        </div>
      </div>
      <div className={styles["partition"]} />
      <div className={styles["form-cn"]}>
        <div className={styles["label-cn"]}>
          <p className={styles["label"]}>メールアドレス</p>
        </div>
        <div className={styles["input-cn"]}>
          <input
            className={styles["input"]}
            placeholder="yamada@example.com"
            type="email"
            value={formValues.email}
            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
          />
        </div>
      </div>
      <div className={styles["partition"]} />
      <div className={styles["form-cn"]}>
        <div className={styles["label-cn"]}>
          <p className={styles["label"]}>お問い合わせ内容</p>
        </div>
        <div className={styles["input-cn"]}>
          <textarea
            className={styles["textarea"]}
            placeholder=""
            value={formValues.body}
            maxLength={2000}
            onChange={(e) => handleChange(e)}
            ref={textareaRef}
            style={{ height }}
          />
        </div>
      </div>
      <div className={styles["partition"]} />
      <div className={styles["btn-cn"]}>
        <div
          className={styles["home-btn"]}
          onClick={() => router.push("/")}
        >
          戻る
        </div>
        <div
          className={styles[(isDisabledSend || isLoading) ? "disabled-btn" : "send-btn"]}
          onClick={(isDisabledSend || isLoading) ? undefined : handleSend}
        >
          送信する
        </div>
      </div>
    </div>
  );
}
