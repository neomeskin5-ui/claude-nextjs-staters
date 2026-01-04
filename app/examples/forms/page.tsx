/**
 * 폼 예제 페이지
 *
 * React Hook Form + Zod를 활용한 폼 검증 예제를 보여줍니다.
 */

import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "@/components/features/forms/ContactForm";

export const metadata: Metadata = {
  title: "폼 예제",
  description: "React Hook Form과 Zod를 활용한 폼 검증 예제입니다.",
};

export default function FormsExamplePage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="폼 예제"
        description="React Hook Form + Zod를 활용한 폼 검증 예제"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>문의 폼</CardTitle>
            <CardDescription>
              유효성 검증과 에러 메시지를 확인해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>주요 기능</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ React Hook Form 통합</li>
                <li>✓ Zod 스키마 검증</li>
                <li>✓ 실시간 유효성 검사</li>
                <li>✓ 접근성(a11y) 지원</li>
                <li>✓ 커스텀 에러 메시지</li>
                <li>✓ 반응형 디자인</li>
                <li>✓ 제출 상태 관리</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용된 기술</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• react-hook-form v7</li>
                <li>• zod v4</li>
                <li>• @hookform/resolvers</li>
                <li>• ShadcnUI Form 컴포넌트</li>
                <li>• Sonner 토스트</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>구현 예시</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto">
                <code>{`const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { ... },
});

const onSubmit = async (data) => {
  // 폼 제출 로직
  toast.success("성공!");
};`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
