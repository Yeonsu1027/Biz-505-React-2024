"use client";
import { useState } from "react";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";

const BookMain = () => {
  const [search, setSearch] = useState("");
  const [isbn, setIsbn] = useState("");
  return (
    <article className="book main">
      <aside className="book list">
        <BookSearch search={search} setSearch={setSearch} />
        <BookList search={search} setIsbn={setIsbn} />
      </aside>
      <aside className="book detail">
        {/*
         조건부 Rendering
        isbn state 값이 "" 또는 null 등이 아니면 BookDetail 을 화면에 표현하라
        */}
        {isbn && <BookDetail isbn={isbn} />}
      </aside>
    </article>
  );
};
// {isbn && <BookDetail isbn={isbn} />}  isbn 값이 있을때만 디테일 화면보여라
// if 1 : "" ~문대신 && 로표시 가능
export default BookMain;
