/**
 * 소개 페이지
 *
 * 스타터킷 소개 및 기술 스택 설명 페이지입니다.
 */

import { Container } from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="스타터킷 소개"
        description="Next.js 16 기반의 범용 웹 스타터킷에 대해 알아보세요."
      />

      <div className="space-y-8">
        {/* 프로젝트 소개 */}
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 개요</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              이 스타터킷은 Next.js 16과 최신 웹 개발 기술을 활용하여 빠르게
              프로젝트를 시작할 수 있도록 설계되었습니다. 랜딩 페이지,
              대시보드, 블로그 등 다양한 유형의 웹사이트에 활용할 수 있는 범용
              템플릿입니다.
            </p>
            <p className="text-muted-foreground">
              모든 컴포넌트는 재사용 가능하도록 설계되었으며, TypeScript를
              통해 타입 안정성을 보장합니다. ShadcnUI를 기반으로 한 일관된
              디자인 시스템을 제공합니다.
            </p>
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <Card>
          <CardHeader>
            <CardTitle>기술 스택</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold">코어 프레임워크</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js 16</Badge>
                  <Badge>React 19</Badge>
                  <Badge>TypeScript 5</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">스타일링</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Tailwind CSS v4</Badge>
                  <Badge>ShadcnUI</Badge>
                  <Badge>Lucide Icons</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">폼 관리</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React Hook Form</Badge>
                  <Badge>Zod</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">상태 관리</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Zustand</Badge>
                  <Badge>Tanstack Query</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">기타</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>next-themes</Badge>
                  <Badge>date-fns</Badge>
                  <Badge>Sonner</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 주요 기능 */}
        <Card>
          <CardHeader>
            <CardTitle>주요 기능</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ 다크모드 지원 (라이트/다크/시스템)</li>
              <li>✅ 반응형 네비게이션 (모바일 메뉴 포함)</li>
              <li>✅ React Hook Form + Zod 기반 폼 검증</li>
              <li>✅ 데이터 테이블 컴포넌트</li>
              <li>✅ 재사용 가능한 공통 컴포넌트</li>
              <li>✅ TypeScript strict 모드</li>
              <li>✅ 접근성(a11y) 고려</li>
              <li>✅ SEO 최적화</li>
            </ul>
          </CardContent>
        </Card>

        {/* 사용 가이드 */}
        <Card>
          <CardHeader>
            <CardTitle>시작하기</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-medium">1. 프로젝트 클론</h4>
              <pre className="rounded-md bg-muted p-3 text-sm">
                <code>git clone [repository-url]</code>
              </pre>
            </div>
            <div>
              <h4 className="mb-2 font-medium">2. 의존성 설치</h4>
              <pre className="rounded-md bg-muted p-3 text-sm">
                <code>npm install</code>
              </pre>
            </div>
            <div>
              <h4 className="mb-2 font-medium">3. 개발 서버 실행</h4>
              <pre className="rounded-md bg-muted p-3 text-sm">
                <code>npm run dev</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
