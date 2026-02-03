import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? animationClass : "opacity-0")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
