/**
 * 마케팅 레이아웃
 *
 * 마케팅 페이지용 레이아웃입니다.
 * Header와 Footer는 루트 레이아웃에서 처리됩니다.
 */

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 루트 레이아웃에서 이미 Header와 Footer를 처리하므로
  // 여기서는 children만 렌더링합니다.
  return <>{children}</>;
}
