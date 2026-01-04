/**
 * EmptyState 컴포넌트
 *
 * 데이터가 없는 상태를 표시하는 컴포넌트입니다.
 */

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12",
        className
      )}
    >
      {Icon && <Icon className="mb-4 h-12 w-12 text-muted-foreground" />}
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      {description && (
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      )}
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  );
}
