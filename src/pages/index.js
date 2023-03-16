import Head from 'next/head'
import HeroSection from '../../components/HeroSection';
import SkillsSection from '../../components/SkillsSection';
import PortfolioSection from '../../components/PortfolioSection';
import ContactSection from '../../components/ContactSection';
import LanguageChange from '../../buttons/LanguageChange';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation("home");

  console.log(t("Hello")); // outputs "Hello, welcome to my portfolio site! I'm Ignacio Britos" if the translation is working correctly

  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection t={t}/>
      <LanguageChange />
      <p> {t("Some text")}</p>
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}