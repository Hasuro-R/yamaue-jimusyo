import Image from "next/image";
import styles from "./top.module.scss";

export default function TopSection() {
  return (
    <section className={styles.section}>
      <Image src="/top.png" alt="山上登記測量事務所" className={styles["img"]} width={600} height={600} />
    </section>
  );
}
