import { Construction } from "lucide-react";

interface ConstructionBannerProps {
  language: 'fr' | 'en';
}

const content = {
  fr: "Site en construction",
  en: "Site under construction"
};

export const ConstructionBanner = ({ language }: ConstructionBannerProps) => {
  const text = content[language];
  
  return (
    <div className="bg-gradient-accent py-3 px-4 text-center animate-fade-in">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Construction className="h-5 w-5 text-accent-foreground animate-pulse" />
        <span className="text-sm sm:text-base font-bold text-accent-foreground">
          {text}
        </span>
        <Construction className="h-5 w-5 text-accent-foreground animate-pulse" />
      </div>
    </div>
  );
};
