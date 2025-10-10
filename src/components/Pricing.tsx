import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

interface PricingProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Tarifs Simples et Transparents",
    subtitle: "Choisissez le plan qui correspond à vos ambitions",
    monthly: "mois",
    cta: "Commencer",
    popular: "Populaire",
    comingSoon: "Bientôt",
    plans: [
      {
        name: "Starter",
        price: "Gratuit",
        description: "Parfait pour débuter dans le trading",
        features: [
          "Analyses IA limitées (10/jour)",
          "Suivi de portfolio basique",
          "Alertes de prix",
          "Données de marché en temps réel",
          "Support communautaire"
        ]
      },
      {
        name: "Pro",
        price: "29€",
        description: "Pour les traders sérieux",
        features: [
          "Analyses IA illimitées",
          "Assistant IA conversationnel avancé",
          "Analyse technique et fondamentale",
          "Recommandations personnalisées",
          "Alertes intelligentes avancées",
          "Support prioritaire",
          "Accès API"
        ],
        popular: true
      },
      {
        name: "Elite",
        price: "99€",
        description: "Performance maximale",
        features: [
          "Tout du plan Pro",
          "Stratégies de trading IA personnalisées",
          "Backtesting avancé",
          "Analyse de sentiment du marché",
          "Sessions de coaching 1-on-1",
          "Support VIP 24/7",
          "Accès anticipé aux nouvelles fonctionnalités"
        ]
      }
    ]
  },
  en: {
    title: "Simple and Transparent Pricing",
    subtitle: "Choose the plan that matches your ambitions",
    monthly: "month",
    cta: "Get Started",
    popular: "Popular",
    comingSoon: "Coming Soon",
    plans: [
      {
        name: "Starter",
        price: "Free",
        description: "Perfect to start trading",
        features: [
          "Limited AI analysis (10/day)",
          "Basic portfolio tracking",
          "Price alerts",
          "Real-time market data",
          "Community support"
        ]
      },
      {
        name: "Pro",
        price: "$29",
        description: "For serious traders",
        features: [
          "Unlimited AI analysis",
          "Advanced conversational AI assistant",
          "Technical and fundamental analysis",
          "Personalized recommendations",
          "Advanced smart alerts",
          "Priority support",
          "API access"
        ],
        popular: true
      },
      {
        name: "Elite",
        price: "$99",
        description: "Maximum performance",
        features: [
          "Everything in Pro",
          "Custom AI trading strategies",
          "Advanced backtesting",
          "Market sentiment analysis",
          "1-on-1 coaching sessions",
          "VIP 24/7 support",
          "Early access to new features"
        ]
      }
    ]
  }
};

export const Pricing = ({ language }: PricingProps) => {
  const t = content[language];
  
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
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

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border hover:border-secondary/50 transition-all duration-300 ${
                plan.popular ? 'md:scale-105 border-secondary shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-accent px-4 py-1 rounded-full shadow-glow">
                  <span className="text-sm font-bold text-accent-foreground flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    {t.popular}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2 min-h-[120px] flex flex-col items-center justify-center">
                  <div className="inline-block bg-gradient-accent px-6 py-3 rounded-full shadow-glow mb-3">
                    <span className="text-lg font-bold text-accent-foreground">
                      {t.comingSoon}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-accent text-accent-foreground hover:shadow-glow' 
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {t.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
