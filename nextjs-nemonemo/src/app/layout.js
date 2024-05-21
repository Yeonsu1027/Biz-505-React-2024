import "@/css/main.css";
import "@/css/main_screen.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header className="HM-main_header">
          <div className="HM-main_sketch"></div>
        </header>
        <div class="HM-main_body">{children}</div>
        <div class="HM-main_hover_box"></div>
        <nav class="HM-main_nav">
          <ul>
            <li>홈</li>
            <li>
              <Link href="/user/join">회원가입</Link>
            </li>
            <li>
              <Link href="/user/login">로그인</Link>
            </li>
            <li>
              <Link href="">로그아웃</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
