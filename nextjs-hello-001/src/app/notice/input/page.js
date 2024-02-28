import styles from "@/css/Notice.input.module.css";
// api/notice.js 에 선언된 createNotice 함수를 사용하겠다
import { createNotice } from "@/app/api/notice";
/*
공지사항 작성하기
작성자, 제목, 내용, 중요도
저장버튼
*/

// notice/input/page.js

//select box 이름의 옵션의 value 값이 담겨간다
export default () => {
  // 서버로 넘어가는 데이터를 핸들러가 가로챈다
  const actionHandler = async (formData) => {
    "use server"; //next 키워드 : react 의 웹서버
    console.log(formData);
    // action 에 의해서 전달된 formData 를 JSON type 의 데이터로 변환하기
    const noticeData = {
      m_author: formData.get("m_author"),
      m_flag: formData.get("m_flag"),
      m_subject: formData.get("m_subject"),
      m_content: formData.get("m_content"),
    };
    // notice 함수에도 async 를 붙여야 await 사용가능
    // app 안에 ""api 폴더"" 를 만들고 js생성
    await createNotice(noticeData); //함수에 데이터전달
  };

  return (
    <form
      action={actionHandler}
      className={styles.form}
      method="POST"
    >
      <div>
        <input placeholder="작성자" name="m_author"></input>
      </div>
      <div>
        <select name="m_flag">
          <option value="0">중요도 선택</option>
          <option value="1">중요공지</option>
          <option value="2">일반공지</option>
          <option value="3">지난공지</option>
        </select>
      </div>
      <div>
        <input placeholder="제목" name="m_subject"></input>
      </div>
      <div>
        <textarea
          placeholder="공지내용"
          rows="10"
          name="m_content"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="저장"></input>
      </div>
    </form>
  );
};
