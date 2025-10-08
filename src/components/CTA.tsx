import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import qubextIcon from "@/assets/qubext-icon.png";

interface CTAProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: "Prêt à Transformer Votre Trading ?",
    description: "Rejoignez des milliers de traders qui utilisent déjà QUBEXT pour optimiser leurs investissements.",
    cta: "Essai Gratuit",
    contact: "Nous Contacter"
  },
  en: {
    title: "Ready to Transform Your Trading?",
    description: "Join thousands of traders already using QUBEXT to optimize their investments.",
    cta: "Free Trial",
    contact: "Contact Us"
  }
};

export const CTA = ({ language }: CTAProps) => {
  const t = content[language];
  
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <img 
              src={qubextIcon} 
              alt="QUBEXT" 
              className="h-32 w-32 animate-float"
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
            >
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.contact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
