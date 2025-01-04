import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["cn"]}>
        <h2 className={styles["title"]}>山上登記測量事務所</h2>
        <div className={styles["under-cn"]}>
          <div className={styles["access-cn"]}>
            <div className={styles["access-left-bar"]} />
            <div className={styles["access-info-cn"]}>
              <p className={styles["access-info-title"]}>Access</p>
              <p>
              〒569-1124
              <br />
              大阪府高槻市南芥川町17番7-201号
              </p>
            </div>
          </div>
          <p className={styles["copyright"]}>
            ©︎ 山上 博隆
            {/* <span>Created by</span> <a href="https://hasuro.com">HASURO</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
