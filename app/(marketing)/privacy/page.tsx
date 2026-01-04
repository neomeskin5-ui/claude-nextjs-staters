import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "개인정보 보호를 위한 방침입니다.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="개인정보처리방침"
        description="개인정보 보호를 위한 방침입니다."
      />

      <div className="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <section className="mb-8">
          <h2>1. 개인정보의 수집 및 이용 목적</h2>
          <p>
            본 웹사이트는 다음의 목적을 위하여 개인정보를 수집 및 이용합니다:
          </p>
          <ul>
            <li>서비스 제공 및 운영</li>
            <li>고객 문의 및 상담 요청에 대한 답변</li>
            <li>서비스 개선 및 신규 서비스 개발</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>2. 수집하는 개인정보의 항목</h2>
          <p>본 웹사이트는 다음과 같은 개인정보를 수집합니다:</p>
          <ul>
            <li>이름</li>
            <li>이메일 주소</li>
            <li>문의 내용</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            수집된 개인정보는 수집 및 이용 목적이 달성된 후에는 지체 없이 파기됩니다.
            단, 관련 법령에 의거하여 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            본 웹사이트는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다:
          </p>
          <ul>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>5. 개인정보의 안전성 확보 조치</h2>
          <p>
            본 웹사이트는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
          </p>
          <ul>
            <li>관리적 조치: 내부관리계획 수립 및 시행, 정기적 직원 교육</li>
            <li>기술적 조치: 개인정보처리시스템 접근권한 관리, 접근통제시스템 설치, 보안프로그램 설치</li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>6. 개인정보 보호책임자</h2>
          <p>
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <p className="mt-4">
            <strong>개인정보 보호책임자</strong><br />
            이메일: privacy@example.com
          </p>
        </section>

        <section className="mb-8">
          <h2>7. 개인정보 처리방침의 변경</h2>
          <p>
            이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            시행일자: 2024-01-01
          </p>
        </section>
      </div>
    </Container>
  );
}
