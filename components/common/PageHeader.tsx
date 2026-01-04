/**
 * PageHeader 컴포넌트
 *
 * 페이지 제목과 설명을 표시하는 헤더 컴포넌트입니다.
 */

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-2 pb-8 pt-6 md:pb-12 md:pt-10", className)}>
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
