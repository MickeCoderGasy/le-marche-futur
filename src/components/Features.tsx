import { Brain, TrendingUp, Shield, Zap, BarChart3, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturesProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Pourquoi Choisir QUBEXT ?",
    subtitle: "Des fonctionnalités IA de pointe pour des traders exigeants",
    features: [
      {
        icon: Brain,
        title: "IA Avancée",
        description: "Algorithmes d'apprentissage automatique qui s'adaptent aux conditions du marché en temps réel"
      },
      {
        icon: TrendingUp,
        title: "Prédictions Précises",
        description: "Analyse des tendances du marché avec une précision de 98% pour des décisions éclairées"
      },
      {
        icon: Shield,
        title: "Gestion des Risques",
        description: "Protection intelligente de votre capital avec des alertes automatiques et stop-loss dynamiques"
      },
      {
        icon: Zap,
        title: "Exécution Ultra-Rapide",
        description: "Ordres exécutés en millisecondes pour capturer les meilleures opportunités"
      },
      {
        icon: BarChart3,
        title: "Analyses Approfondies",
        description: "Tableaux de bord complets avec insights en temps réel et rapports personnalisables"
      },
      {
        icon: Clock,
        title: "Trading 24/7",
        description: "Surveillance continue du marché, même pendant votre sommeil"
      }
    ]
  },
  en: {
    title: "Why Choose QUBEXT?",
    subtitle: "Cutting-edge AI features for demanding traders",
    features: [
      {
        icon: Brain,
        title: "Advanced AI",
        description: "Machine learning algorithms that adapt to market conditions in real-time"
      },
      {
        icon: TrendingUp,
        title: "Accurate Predictions",
        description: "Market trend analysis with 98% accuracy for informed decisions"
      },
      {
        icon: Shield,
        title: "Risk Management",
        description: "Intelligent capital protection with automatic alerts and dynamic stop-loss"
      },
      {
        icon: Zap,
        title: "Ultra-Fast Execution",
        description: "Orders executed in milliseconds to capture the best opportunities"
      },
      {
        icon: BarChart3,
        title: "Deep Analytics",
        description: "Comprehensive dashboards with real-time insights and customizable reports"
      },
      {
        icon: Clock,
        title: "24/7 Trading",
        description: "Continuous market monitoring, even while you sleep"
      }
    ]
  }
};

export const Features = ({ language }: FeaturesProps) => {
  const t = content[language];
  
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-accent">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
