import Footer from "@/components/footer/Footer";
import styles from "./page.module.scss";
import ContactSection from "@/components/sections/contact/ContactSection";
import ProfileSection from "@/components/sections/profile/ProfileSection";
import AboutSection from "@/components/sections/about/AboutSection";
import TopSection from "@/components/sections/top/TopSection";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <TopSection />
        <AboutSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
