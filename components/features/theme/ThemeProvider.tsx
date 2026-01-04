/**
 * ThemeProvider 컴포넌트
 *
 * next-themes의 ThemeProvider를 래핑하여 다크모드 기능을 제공합니다.
 * hydration 에러를 방지하기 위해 적절한 설정을 포함합니다.
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      {children}
    </NextThemesProvider>
  );
}
