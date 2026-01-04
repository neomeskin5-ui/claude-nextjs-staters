import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "이용약관",
  description: "서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="이용약관"
        description="서비스 이용약관입니다."
      />

      <div className="prose prose-neutral dark:prose-invert max-w-none mt-8">
        <section className="mb-8">
          <h2>제1조 (목적)</h2>
          <p>
            본 약관은 서비스(이하 "회사"라 합니다)가 제공하는 웹사이트 및 관련 서비스의 이용과 관련하여
            회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2>제2조 (정의)</h2>
          <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
          <ul>
            <li>
              "서비스"란 회사가 제공하는 모든 웹 기반 서비스를 의미합니다.
            </li>
            <li>
              "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.
            </li>
            <li>
              "콘텐츠"란 서비스를 통해 제공되는 모든 정보, 텍스트, 그래픽, 이미지 등을 의미합니다.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>제3조 (약관의 효력 및 변경)</h2>
          <ol>
            <li>
              본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
            </li>
            <li>
              본 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 공지하고, 이에 동의한 이용자가 서비스에 가입함으로써 효력이 발생합니다.
            </li>
            <li>
              회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며, 약관이 변경되는 경우 지체 없이 이를 공지합니다.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제4조 (서비스의 제공 및 변경)</h2>
          <ol>
            <li>
              회사는 다음과 같은 서비스를 제공합니다:
              <ul>
                <li>웹사이트를 통한 정보 제공 서비스</li>
                <li>고객 문의 및 상담 서비스</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>
            </li>
            <li>
              회사는 상당한 이유가 있는 경우 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경할 수 있습니다.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제5조 (서비스의 중단)</h2>
          <p>
            회사는 다음 각 호에 해당하는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다:
          </p>
          <ol>
            <li>서비스용 설비의 보수 또는 공사로 인한 경우</li>
            <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우</li>
            <li>시스템 점검이 필요한 경우</li>
            <li>기타 불가항력적 사유가 있는 경우</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제6조 (이용자의 의무)</h2>
          <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다:</p>
          <ol>
            <li>신청 또는 변경 시 허위내용 등록</li>
            <li>타인의 정보 도용</li>
            <li>회사가 게시한 정보의 변경</li>
            <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 송신 또는 게시</li>
            <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제7조 (저작권의 귀속 및 이용제한)</h2>
          <ol>
            <li>
              회사가 작성한 콘텐츠에 대한 저작권 및 기타 지적재산권은 회사에 귀속합니다.
            </li>
            <li>
              이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제8조 (면책조항)</h2>
          <ol>
            <li>
              회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
            </li>
            <li>
              회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
            </li>
            <li>
              회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제9조 (분쟁해결)</h2>
          <ol>
            <li>
              회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
            </li>
            <li>
              회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>제10조 (재판권 및 준거법)</h2>
          <ol>
            <li>
              본 약관과 관련된 사항에 대하여는 대한민국 법을 준거법으로 합니다.
            </li>
            <li>
              서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <p className="mt-4 text-sm text-muted-foreground">
            <strong>부칙</strong><br />
            (시행일) 이 약관은 2024년 1월 1일부터 시행합니다.
          </p>
        </section>
      </div>
    </Container>
  );
}
