import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ParticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  children: React.ReactNode;
}

const ParticleCard: React.FC<ParticleCardProps> = ({
  particleCount = 12,
  glowColor = "132,0,255",
  enableTilt = true,
  clickEffect = true,
  children,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
    };

    if (enableTilt) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (enableTilt) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [enableTilt]);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden transition-all transform-gpu rounded-2xl p-6 border backdrop-blur-xl"
      style={{
        borderColor: `rgba(${glowColor}, 0.2)`,
        boxShadow: `0 0 20px rgba(${glowColor}, 0.1)`,
        backgroundColor: "rgba(255,255,255,0.1)",
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ParticleCard;
