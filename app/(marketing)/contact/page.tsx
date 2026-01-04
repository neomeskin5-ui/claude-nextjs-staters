/**
 * 문의 페이지
 *
 * 사용자 문의를 받는 페이지입니다.
 */

import type { Metadata } from "next";
import { Mail } from "lucide-react";
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
  title: "문의하기",
  description: "궁금한 점이 있으시면 언제든지 연락주세요.",
};

export default function ContactPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="문의하기"
        description="궁금한 점이 있으시면 언제든지 연락주세요."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>문의 양식</CardTitle>
              <CardDescription>
                아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Mail className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>이메일 문의</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                이메일로 직접 문의하실 수도 있습니다.
              </p>
              <p className="mt-2 font-medium">contact@example.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>자주 묻는 질문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-1 font-medium">무료로 사용할 수 있나요?</h4>
                <p className="text-sm text-muted-foreground">
                  네, 이 스타터킷은 오픈소스이며 자유롭게 사용하실 수 있습니다.
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-medium">
                  상업적으로 사용 가능한가요?
                </h4>
                <p className="text-sm text-muted-foreground">
                  네, MIT 라이선스로 제공되어 상업적 프로젝트에도 사용
                  가능합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
