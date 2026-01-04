/**
 * Container 컴포넌트
 *
 * 최대 너비 제한과 반응형 패딩을 제공하는 래퍼 컴포넌트입니다.
 */

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
