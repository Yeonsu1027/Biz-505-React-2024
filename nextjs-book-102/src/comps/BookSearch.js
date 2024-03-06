"use client";
// BookSearch 컴포넌트를 CSR 의 client Component로 사용하겠다

// import { useCallback } from "react";

const BookSearch = ({ search, setSearch }) => {
  // 딜레이 값으로 200을 써라
  const debounce = (callback, delay = 200) => {
    let debounceTimer;
    return (...args) => {
      // debounce 함수가 호출되면 무조건 timer 를 reset 하라(콜백실행안됨)
      // clearTimeout(debounceTimer);
      debounceTimer = setTimeout(
        () => callback.apply(this, args),
        delay
      );
      // callback 함수를 실행하는데..
      // apply 는 args를 callback에전달 // 200만큼지나서
    };
  };
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  // debounce 객체를 사용하여 onChangeHandler 제어하기
  // 키보드에서 문자를 입력한 후 100 ms 동안 기다리면
  // 그때 onChangeHandler 를 실행하라
  // debounce 객체의 callback 이 onChangeHandler 가 된다
  const onDebounceHandler = debounce(onChangeHandler, 200); // 1000 : 1초 이만큼 기다리고 그 후에 패치

  return (
    <div className="book search">
      <input
        placeholder="검색어"
        defaultValue={search}
        onChange={onDebounceHandler} // 이게 자동으로 풀어짐
        // onChange={(e)=>onDebounceHandler(e)} // 이렇게
      />
    </div>
  );
};
export default BookSearch;
