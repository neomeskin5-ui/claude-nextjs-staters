/**
 * Header 컴포넌트
 *
 * 사이트 상단 헤더를 제공합니다.
 * 데스크톱 네비게이션, 모바일 메뉴, 다크모드 토글을 포함합니다.
 */

"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { MobileNav } from "./MobileNav";
import { mainNav } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site-config";

// ThemeToggle을 클라이언트에서만 렌더링하여 hydration 에러 방지
const ThemeToggle = dynamic(
  () => import("@/components/features/theme/ThemeToggle").then(mod => mod.ThemeToggle),
  { ssr: false }
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex md:gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
