import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const BookContext = createContext();

const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const bookFecth = async () => {
      const res = await fetch("naver/books/java");
      const json = await res.json();
      setBookList([...json]); // 배열풀어서 담기
    };
    bookFecth();
  }, []); // [] : 렌더링될때 최초1번

  return (
    <BookContext.Provider value={{ bookList }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContextProvider, useBookContext };
