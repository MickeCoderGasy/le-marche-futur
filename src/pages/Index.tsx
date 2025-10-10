import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ConstructionBanner } from "@/components/ConstructionBanner";

const Index = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen">
      <ConstructionBanner language={language} />
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Features language={language} />
        <HowItWorks language={language} />
        <Pricing language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
