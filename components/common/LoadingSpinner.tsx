/**
 * LoadingSpinner 컴포넌트
 *
 * 로딩 상태를 표시하는 스피너 컴포넌트입니다.
 */

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <Loader2
      className={cn(
        "animate-spin text-muted-foreground",
        size === "sm" && "h-4 w-4",
        size === "md" && "h-8 w-8",
        size === "lg" && "h-12 w-12",
        className
      )}
    />
  );
}
