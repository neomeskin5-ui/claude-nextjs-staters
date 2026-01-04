/**
 * Footer 컴포넌트
 *
 * 사이트 하단 푸터를 제공합니다.
 * 회사 정보, 소셜 링크, 리소스 링크를 포함합니다.
 */

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 회사 정보 */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-block text-lg font-bold">
              {siteConfig.name}
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* 링크 섹션 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">리소스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  문의
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">예제</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/examples/forms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  폼
                </Link>
              </li>
              <li>
                <Link
                  href="/examples/tables"
                  className="text-muted-foreground hover:text-foreground"
                >
                  테이블
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
