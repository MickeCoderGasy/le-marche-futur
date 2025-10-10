import { Button } from "@/components/ui/button";
import { Download, Construction } from "lucide-react";
import qubextLogo from "@/assets/qubext-logo.png";
import constructionImage from "@/assets/construction-hero.png";

interface HeroProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Intelligence de Trading",
    titleAccent: "Alimentée par l'IA",
    subtitle: "Transformez vos décisions de trading avec notre assistant IA de pointe. Analyses en temps réel, prédictions précises et stratégies optimisées pour maximiser vos profits.",
    constructionTitle: "Site en Construction",
    constructionSubtitle: "Notre plateforme de trading IA arrive bientôt",
    cta: "Télécharger l'Application",
    stats: [
      { value: "98%", label: "Précision" },
      { value: "24/7", label: "Surveillance" },
      { value: "500K+", label: "Transactions" }
    ]
  },
  en: {
    title: "Trading Intelligence",
    titleAccent: "Powered by AI",
    subtitle: "Transform your trading decisions with our cutting-edge AI assistant. Real-time analysis, accurate predictions, and optimized strategies to maximize your profits.",
    constructionTitle: "Under Construction",
    constructionSubtitle: "Our AI trading platform is coming soon",
    cta: "Download the App",
    stats: [
      { value: "98%", label: "Accuracy" },
      { value: "24/7", label: "Monitoring" },
      { value: "500K+", label: "Trades" }
    ]
  }
};

export const Hero = ({ language }: HeroProps) => {
  const t = content[language];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 animate-fade-in max-w-5xl mx-auto pt-24">
          {/* Construction Badge - Large and prominent */}
          <div className="inline-flex items-center gap-3 bg-gradient-accent px-10 py-5 rounded-full shadow-glow animate-pulse">
            <Construction className="h-8 w-8 text-accent-foreground" />
            <span className="text-2xl sm:text-3xl font-bold text-accent-foreground">
              {t.constructionTitle}
            </span>
            <Construction className="h-8 w-8 text-accent-foreground" />
          </div>

          {/* Construction illustration */}
          <div className="relative animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={constructionImage} 
                alt="Site en construction" 
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-accent/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 pt-4">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                {t.title}{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  {t.titleAccent}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.constructionSubtitle}
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                <Download className="mr-2 h-5 w-5" />
                {t.cta}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-3xl mx-auto">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
