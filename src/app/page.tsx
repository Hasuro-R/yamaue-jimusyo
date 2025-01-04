import styles from "./page.module.scss";
import ContactSection from "@/components/sections/contact/ContactSection";
import ProfileSection from "@/components/sections/profile/ProfileSection";
import AboutSection from "@/components/sections/about/AboutSection";
import TopSection from "@/components/sections/top/TopSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopSection />
      <AboutSection />
      <ProfileSection />
      <ContactSection />
    </main>
  );
}
