import Image from "next/image";
import styles from "./about.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.cn}>
        <div className={styles["img-cn"]}>
          <p className={styles["title"]}>About</p>
          <Image src="/about.png" alt="about" width={300} height={200} />
          <div className={styles["img-bg"]} />
        </div>
        <div className={styles["about-cn"]}>
          <h2>
            マイナーな資格の<span>土地家屋調査士</span>は、
            <br />
            皆様に<span>身近</span>な資格のひとつです。
          </h2>
          <p>
            どのような仕事かご存知ですか？
            <br />
            <br />
            三脚なに機械をのせて道路で測量をしているのを見たことがあると思います。
            <br />
            測量にも色々ありますが、私が特化している測量は、土地の境界線を確定する業務です。
            <br />
            境界線はお互いの所有権と所有権がぶつかり合う場所で、片方だけでは確認することが出来ません。皆様のご協力の基に境界線を確認致します。
            <br />
            境界立ち会いは、図面等の資料があれば資料に基づき、資料がない場合は、所有者同士の話し合いで確認致します。
          </p>
        </div>
      </div>
    </section>
  );
}
