/**
 * 사이트 전역 설정
 *
 * 사이트명, 설명, URL, 소셜 링크 등 전역 설정을 관리합니다.
 */

export const siteConfig = {
  name: "Next.js Starter Kit",
  description: "범용 웹 스타터킷 - Next.js 16 + TypeScript + Tailwind CSS + ShadcnUI",
  url: "https://example.com",
  ogImage: "https://example.com/og.jpg",
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
