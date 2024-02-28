// import { useState } from "react";

// const [notice, setNotice] = useState({
//   n_author: "rito1205@naver.com",
//   n_titme: "",
//   n_content: "",
//   n_important: "",
// });

// const [noticeList, setnoticeList] = useState([]);

const BBsLayout = ({ children }) => {
  return (
    <>
      <h3>공지사항</h3>
      {children}
    </>
  );
};

export default BBsLayout;
