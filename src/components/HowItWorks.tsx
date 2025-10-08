import { Card, CardContent } from "@/components/ui/card";
import { Download, Brain, TrendingUp, Rocket } from "lucide-react";

interface HowItWorksProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Comment Ça Marche ?",
    subtitle: "Commencez à trader intelligemment en 4 étapes simples",
    steps: [
      {
        icon: Download,
        title: "Créez votre compte",
        description: "Inscription gratuite en moins de 2 minutes. Aucune carte de crédit requise pour démarrer."
      },
      {
        icon: Brain,
        title: "Configurez votre IA",
        description: "Personnalisez les paramètres selon votre profil de risque et vos objectifs d'investissement."
      },
      {
        icon: TrendingUp,
        title: "L'IA analyse le marché",
        description: "Notre système surveille et analyse des millions de points de données en temps réel."
      },
      {
        icon: Rocket,
        title: "Tradez et profitez",
        description: "Recevez des alertes intelligentes et exécutez vos ordres avec confiance."
      }
    ]
  },
  en: {
    title: "How It Works?",
    subtitle: "Start trading smart in 4 simple steps",
    steps: [
      {
        icon: Download,
        title: "Create your account",
        description: "Free signup in less than 2 minutes. No credit card required to get started."
      },
      {
        icon: Brain,
        title: "Configure your AI",
        description: "Customize settings according to your risk profile and investment goals."
      },
      {
        icon: TrendingUp,
        title: "AI analyzes the market",
        description: "Our system monitors and analyzes millions of data points in real-time."
      },
      {
        icon: Rocket,
        title: "Trade and profit",
        description: "Receive smart alerts and execute your orders with confidence."
      }
    ]
  }
};

export const HowItWorks = ({ language }: HowItWorksProps) => {
  const t = content[language];
  
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-accent transform -translate-y-1/2" style={{ zIndex: -1 }} />
            
            {t.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-glow relative"
                >
                  <CardContent className="p-8">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-glow">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-4 rounded-lg bg-primary/50">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
