import { ShieldCheck, Clock, FileText, Star, Wind, Leaf, Award, Heart } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Clock,
  FileText,
  Star,
  Wind,
  Leaf,
  Award,
  Heart,
};

interface WhyUsCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

export default function WhyUsCard({ title, description, icon, index = 0 }: WhyUsCardProps) {
  const Icon = iconMap[icon] || ShieldCheck;

  return (
    <div className="group bg-white rounded-xl border border-slate-200/80 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold font-heading text-surface-dark mb-3">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
