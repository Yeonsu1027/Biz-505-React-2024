const StudentDetail = ({ children, studentDetail }) => {
  const viewdetail = studentDetail.map((item) => (
    <ul className="deul" key={item.st_num}>
      <li>{item.st_num}</li>
      <li>{item.st_name}</li>
      <li>{item.st_dept}</li>
      <li>{item.st_grade}</li>
      <li>{item.st_tel}</li>
      <li>{item.st_addr}</li>
    </ul>
  ));

  return (
    <>
      <h1>학생정보자세히보기</h1>
      {viewdetail}
      {children}
    </>
  );
};

export default StudentDetail;
