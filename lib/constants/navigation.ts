/**
 * 네비게이션 데이터
 *
 * 메인 네비게이션 메뉴 데이터를 관리합니다.
 */

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  {
    title: "홈",
    href: "/",
  },
  {
    title: "소개",
    href: "/about",
  },
  {
    title: "문의",
    href: "/contact",
  },
  {
    title: "예제",
    href: "/examples/forms",
  },
];
