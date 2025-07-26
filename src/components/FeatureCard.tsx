import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-primary/10 hover:border-primary/20 shadow-soft hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:animate-glow-pulse">
          <Icon className="w-5 h-5 text-primary-foreground group-hover:animate-float" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{description}</p>
        </div>
      </div>
    </Card>
  );
};