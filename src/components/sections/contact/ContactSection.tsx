import Link from "next/link";
import styles from "./contact.module.scss";

export default function ContactSection() {
  return (
    <section
      className={styles.section}
    >
      <div
        className={styles["cn"]}
        id="contact"
      >
        <div className={styles["section-title-cn"]}>
          <h2>Contact</h2>
          <p>連絡先</p>
        </div>
        <div className={styles["contact-cn"]}>
          <div className={styles["contact-list"]}>
            TEL：072-669-9280　<span>（固定電話）</span><br />
            090-6050-0043<span>（携帯電話）</span>
          </div>
          <div className={styles["partition"]} />
          <div className={styles["contact-list"]}>
            FAX：072-669-9281
          </div>
          <div className={styles["partition"]} />
          <Link
            href="contact"
            className={styles["contact-link"]}
          >
            メールでのお問い合わせはこちら
          </Link>
        </div>
      </div>
    </section>
  );
}
