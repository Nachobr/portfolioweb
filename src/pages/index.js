import Head from 'next/head'
import HeroSection from '../../components/HeroSection';
import SkillsSection from '../../components/SkillsSection';
import PortfolioSection from '../../components/PortfolioSection';
import ContactSection from '../../components/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}