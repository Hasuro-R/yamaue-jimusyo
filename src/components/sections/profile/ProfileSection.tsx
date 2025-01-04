import Image from "next/image";
import styles from "./profile.module.scss";

export default function ProfileSection() {
  return (
    <section className={styles.section}>
      <div className={styles.cn}>
        <div className={styles["profile-cn"]}>
          <h2>山上 博隆 / Yamaue Hirotaka</h2>
          <p>土地家屋調査士</p>
          <p>
            ここにプロフィールが入るはず
            <br />
            よろしくです
          </p>
        </div>
        <div className={styles["img-cn"]}>
          <div className={styles["img-wr"]}>
            <Image src="/profile.png" alt="山上 博隆" className={styles["img"]} width={200} height={200} />
            <div className={styles["img-deco-top"]} />
            <div className={styles["img-deco-bottom-1"]} />
            <div className={styles["img-deco-bottom-2"]} />
          </div>
        </div>
      </div>
    </section>
  );
}
