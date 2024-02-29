"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/comps/AsideList.module.css";

export default () => {
  // Link, router 를 통해서 열렸을때 사용한 URL 을 알려주는 함수
  const pathname = usePathname();

  const routes = [
    {
      path: "/blog/write",
      title: "글쓰기",
    },
    {
      path: "/blog/all",
      title: "전체글 보기",
    },
    {
      path: "/blog/new",
      title: "새글 보기",
    },
    {
      path: "/blog/like",
      title: "인기글 보기",
    },
  ];

  // 리스트 항목
  const viewRoutes = routes.map((rotue) => {
    // 클릭한 리스트만 색깔 파란색
    return (
      <li>
        <Link
          href={rotue.path}
          className={pathname === rotue.path ? styles.active : ""}
        >
          {rotue.title}
        </Link>
      </li>
    );
  });

  return <ul className={styles.ul}>{viewRoutes}</ul>;
};
