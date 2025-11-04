import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative z-[100] ${className}`}>
      <div
        className={`w-full h-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-[60px] 2xl:px-[80px] box-border ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
