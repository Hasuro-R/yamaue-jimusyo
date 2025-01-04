import ContactForm from "@/components/form/ContactForm";
import styles from "./contactPage.module.scss";

export default function ContactPage() {
  return (
    <div className={styles["all-cn"]}>
      <div className={styles["title-cn"]}>
        <h1>Contact</h1>
        <p>お問い合わせ</p>
      </div>
      <ContactForm />
    </div>
  );
}
