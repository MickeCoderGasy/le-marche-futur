import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Download } from "lucide-react";
import qubextLogo from "@/assets/qubext-logo.png";

interface HeroProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Intelligence de Trading",
    subtitle: "Alimentée par l'IA",
    description: "Transformez vos décisions de trading avec notre assistant IA de pointe. Analyses en temps réel, prédictions précises et stratégies optimisées pour maximiser vos profits.",
    cta: "Télécharger l'Application",
    stats: [
      { value: "98%", label: "Précision" },
      { value: "24/7", label: "Surveillance" },
      { value: "500K+", label: "Transactions" }
    ]
  },
  en: {
    title: "Trading Intelligence",
    subtitle: "Powered by AI",
    description: "Transform your trading decisions with our cutting-edge AI assistant. Real-time analysis, accurate predictions, and optimized strategies to maximize your profits.",
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <img 
              src={qubextLogo} 
              alt="QUBEXT" 
              className="h-32 sm:h-40 lg:h-48 w-auto"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-secondary via-secondary to-accent bg-clip-text text-transparent">
              {t.title}
            </span>
            <br />
            <span className="text-foreground">{t.subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t.description}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
