import { Twitter, Linkedin, Github } from "lucide-react";

interface FooterProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    tagline: "Intelligence de Trading Alimentée par l'IA",
    rights: "Tous droits réservés.",
    product: "Produit",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    docs: "Documentation",
    company: "Entreprise",
    about: "À propos",
    blog: "Blog",
    careers: "Carrières",
    legal: "Légal",
    privacy: "Confidentialité",
    terms: "Conditions"
  },
  en: {
    tagline: "AI-Powered Trading Intelligence",
    rights: "All rights reserved.",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    docs: "Documentation",
    company: "Company",
    about: "About",
    blog: "Blog",
    careers: "Careers",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms"
  }
};

export const Footer = ({ language }: FooterProps) => {
  const t = content[language];
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
              QUBEXT
            </h3>
            <p className="text-muted-foreground mb-4">
              {t.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.product}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t.features}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t.pricing}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t.docs}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.company}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t.blog}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t.careers}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} QUBEXT. {t.rights}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                {t.privacy}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
