import Link from "next/link";
import { selectAll } from "../api/notice";

// notice/page.js : 공지사항 기본페이지
export default async () => {
  // api 에서 만든함수 selectAll()
  const noticeList = await selectAll();
  // 받은 데이터를 map 으로 펼쳐서
  const viewList = noticeList.map((item) => {
    return (
      <li>
        <span>{item.m_author}</span>
        <span>{item.m_subject}</span>
      </li>
    );
  });
  return (
    <div>
      <ul>{viewList}</ul>
      <Link href="/notice/input">공지사항 작성</Link>
    </div>
  );
};
// export default NoticePage;
