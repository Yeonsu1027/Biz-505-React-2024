"use server";
// 방법1
// const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
// const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
// process.env. 까지 치면 env 에서 설정한 변수가뜬다
// 방법2. 구조분해
// process.env 환경변수를 구조분해하여 개별 변수에 할당하기
const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json"; // 비밀아님

// 만약 client mode 로 사용하는 컴포넌트, 함수모듈등에는
// 함수의 시작부분에 async 를 절대 사용하면 안된다

// 함수내보내기
export const getNaverBooks = async (search) => {
  const fetchOption = {
    method: "GET",
    headers: {
      // 개발자도구 책에 참고사항 작성
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };
  const response = await fetch(
    `${NAVER_BOOK_URL}?query=${search || "java"}`,
    fetchOption
  );
  const books = await response.json();
  // naver_api.js 는 server 모듈이다
  // 이 모듈에서 console.log() 를 사용하면 서버 console 에 출력된다 (터미널에)
  // console.log("BOOKS", books); // 서버콘솔
  return books.items;
};

// 기존 page.js에 함수있었을때
// console.log(NAVER_CLIENT_ID, NAVER_CLIENT_SECRET);

// const books = await getNaverBooks();
// const viewList = books.map((book) => <li>{book.tilte}</li>);
// map 에서 Error: books.map is not a function 오류가 나오는데
// 이건 map 없는게아니라 books 가 배열이 아니어서 발생함
// 배열아니고 items 부터 배열이었음 => `${NAVER_BOOK_URL}?query=java` 수정 return books.items; 수정 후 정상출력
// const viewList = books.map((book) => {
//   return <li>{book.title}</li>;
// });
// console.log(books);
