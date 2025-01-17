"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./header.module.scss";
import { useAtom } from "jotai";
import { isScrollInvalidState } from "@/atoms/atoms";
import { MenuType } from "@/types/menuType";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const [, setIsScrollInvalid] = useAtom(isScrollInvalidState);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const borderStyle = { borderColor: (isScrolled || isOpenMenu) ? "var(--text-color)" : "var(--color-white)" };
  const menuList: MenuType[] = [
    { title: "About", href: "#about" },
    { title: "Profile", href: "#profile" },
    { title: "Contact", href: "#contact" },
  ];

  const handleMenu = () => {
    setIsScrollInvalid(!isOpenMenu);
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        setIsScrolled(window.scrollY > 120);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={styles.header}
        style={{ boxShadow: isOpenMenu ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "" }}
        animate={(isScrolled || isOpenMenu) ? {
          backgroundColor: "var(--color-white)",
          color: "var(--text-color)",
        }: {
          backgroundColor: "transparent",
          color: "var(--color-white)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={styles["header-cn"]}
        >
          <p className={styles["title"]}>
            山上登記測量事務所
          </p>
          <motion.div
            className={styles['toggle-button']}
            onClick={handleMenu}
            onMouseEnter={() => setIsHover(true)}
            onMouseDown={() => setIsHover(false)}
            onMouseLeave={() => setIsHover(false)}
          >
            <motion.span
              className={styles['border1']}
              style={borderStyle}
              initial={{ rotate: 0, y: 0 }}
              animate={isOpenMenu ? {
                y: '6.5px', rotate: 45,
              }: {
                y: 0, rotate: 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={styles['border2']}
              style={borderStyle}
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: isOpenMenu ? 0 : 1,
                x: isOpenMenu ? 10 : 0,
                width: isHover || isOpenMenu ? '1.3rem' : '1rem',
              }}
              transition={{ duration: isHover ? 0.2 : 0.4 }}
            />
            <motion.span
              className={styles['border3']}
              style={borderStyle}
              initial={{ rotate: 0, y: 0 }}
              animate={{
                y: isOpenMenu ? '-6.5px' : 0,
                rotate: isOpenMenu ? -45 : 0,
                width: isHover || isOpenMenu ? '1.3rem' : '0.7rem',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        <motion.div
          className={styles["menu-cn"]}
          animate={{ height: isOpenMenu ? '200px' : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isOpenMenu && (
            <>
            {menuList.map((menu, index) => (
              <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                key={index}
              >
                {pathname === "/" ? (
                  <AnchorLink
                    className={styles["menu-list-box"]}
                    onClick={handleMenu}
                    href={menu.href}
                    offset="50"
                  >
                    {menu.title}
                  </AnchorLink>
                ) : (
                  <Link
                    href="/"
                    className={styles["menu-list-box"]}
                  >
                    {menu.title}
                  </Link>
                )}
              </motion.div>
            ))}
            </>
          )}
        </motion.div>
      </motion.header>
      {isOpenMenu && (
        <div
          className={styles["header-menu-bg"]}
          onClick={handleMenu}
        />
      )}
    </>
  );
}
