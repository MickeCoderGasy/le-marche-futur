import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface HeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const content = {
  fr: {
    login: "Connexion",
    signup: "Inscription"
  },
  en: {
    login: "Login",
    signup: "Sign Up"
  }
};

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const t = content[language];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              QUBEXT
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="text-muted-foreground hover:text-secondary"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'EN' : 'FR'}
            </Button>

            {/* Auth Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-secondary"
            >
              {t.login}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300"
            >
              {t.signup}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
