import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  image?: string;
  hoverable?: boolean;
  style?: React.CSSProperties;
}

export const Card3D = ({ children, className, onClick, image, hoverable = true, style }: Card3DProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
        "bg-card border border-border shadow-md",
        hoverable && "card-3d hover:shadow-3d",
        onClick && "active:scale-95",
        className
      )}
      style={image ? {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style
      } : style}
    >
      {children}
    </div>
  );
};
