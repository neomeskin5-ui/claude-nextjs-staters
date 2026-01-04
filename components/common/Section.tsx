/**
 * Section 컴포넌트
 *
 * 섹션별 여백 관리와 배경색 변형을 제공하는 래퍼 컴포넌트입니다.
 */

import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "muted" | "accent";
}

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        variant === "muted" && "bg-muted/50",
        variant === "accent" && "bg-accent",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
