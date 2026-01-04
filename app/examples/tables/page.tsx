/**
 * 테이블 예제 페이지
 *
 * ShadcnUI Table 컴포넌트를 활용한 데이터 표시 예제를 보여줍니다.
 */

import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { DataTable } from "@/components/features/data-display/DataTable";

export const metadata: Metadata = {
  title: "테이블 예제",
  description: "ShadcnUI Table 컴포넌트를 활용한 데이터 표시 예제입니다.",
};

export default function TablesExamplePage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="테이블 예제"
        description="ShadcnUI Table 컴포넌트를 활용한 데이터 표시"
      />

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>사용자 목록</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable />
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>기본 기능</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 반응형 테이블 레이아웃</li>
                <li>✓ 스타일링된 헤더와 셀</li>
                <li>✓ 호버 효과</li>
                <li>✓ 뱃지를 활용한 상태 표시</li>
                <li>✓ 깔끔한 테두리 스타일</li>
                <li>✓ 다크모드 지원</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>확장 가능한 기능</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 정렬 (Tanstack Table)</li>
                <li>• 필터링</li>
                <li>• 페이지네이션</li>
                <li>• 행 선택</li>
                <li>• 컬럼 숨기기/보이기</li>
                <li>• 검색 기능</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용된 기술</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• ShadcnUI Table 컴포넌트</li>
                <li>• Badge 컴포넌트 (상태 표시)</li>
                <li>• TypeScript 인터페이스</li>
                <li>• Tailwind CSS 스타일링</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>구현 팁</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • 간단한 테이블: ShadcnUI Table만으로 충분합니다
                </li>
                <li>
                  • 복잡한 테이블: Tanstack Table을 통합하여 정렬, 필터링 등
                  고급 기능 추가
                </li>
                <li>• 데이터 타입: TypeScript 인터페이스로 명확하게 정의</li>
                <li>
                  • 스타일링: Tailwind CSS로 반응형 및 테마별 스타일 적용
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
