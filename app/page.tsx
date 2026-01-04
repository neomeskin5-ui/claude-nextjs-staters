/**
 * 홈페이지
 *
 * 범용 웹 스타터킷의 메인 랜딩 페이지입니다.
 */

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/common/Section";

export default function HomePage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <Section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            범용 웹 스타터킷으로
            <br />
            <span className="text-primary">빠르게 시작하세요</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js 16, TypeScript, Tailwind CSS, ShadcnUI로 구축된
            <br />
            프로덕션 레디 스타터 템플릿
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/examples/forms">
                예제 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">자세히 알아보기</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* 기능 섹션 */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            강력한 기능들
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            모던 웹 개발에 필요한 모든 것
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Sparkles className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>최신 기술 스택</CardTitle>
              <CardDescription>
                Next.js 16, React 19, TypeScript 5
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                최신 프레임워크와 라이브러리로 구축되어 뛰어난 성능과 개발 경험을
                제공합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>즉시 사용 가능</CardTitle>
              <CardDescription>ShadcnUI 컴포넌트 포함</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                미리 구축된 재사용 가능한 컴포넌트로 빠르게 프로젝트를 시작할 수
                있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>타입 안정성</CardTitle>
              <CardDescription>TypeScript + Zod 검증</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                완전한 타입 안정성과 런타임 검증으로 안정적인 코드를 작성할 수
                있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA 섹션 */}
      <Section>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            모든 것이 준비되어 있습니다. 클론하고 바로 개발을 시작하세요.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              문의하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
