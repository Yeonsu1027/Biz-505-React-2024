"use client"; // 맨 위
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";
import { useState, useEffect } from "react"; // useEffect: 데이터변화생기면 이벤트
export default () => {
  const [search, setSerach] = useState("");

  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/get?search=${search}`); // nodejs서버에요청
      const books = await response.json();
      setBookList([...books]);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * useEffect() 는 CSR(Client Side Rendering) 컴포넌트에서
   * 특정한 state 변수를 감시하고 있다가
   * state 변수에 변화가 생기면 event 를 일으키고 내부의 코드를 실행한다
   *
   * useEffect() 에 state([]) 을 공백으로 두면
   * 현재 component 가 화면에 mount 되었을때 한 번  event 를 발생하고
   * 내부의 코드를 실행한다
   */
  useEffect(() => {
    fetchBooks();
  }, [search]); // 이펙트[]안에 state 가 들어있으면 state가변경되었을때 실행
  // 공백이면 화면이 렌더링 될때 실행

  return (
    <section>
      <BookSearch search={search} setSerach={setSerach} />
      <article className="body">
        <BookList bookList={bookList} />
        <BookDetail />
      </article>
    </section>
  );
};
