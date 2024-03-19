const StudentDetail = ({ children, studentDetail, student }) => {
  const viewdetail = studentDetail.map((item) => (
    <ul className="deul" key={item.st_num}>
      <li>학번 : {item.st_num}</li>
      <li>이름 : {item.st_name}</li>
      <li>학과 : {item.st_dept}</li>
      <li>학년 : {item.st_grade}</li>
      <li>전화 : {item.st_tel}</li>
      <li>주소 : {item.st_addr}</li>
    </ul>
  ));

  return (
    <>
      {viewdetail}
      <span>{student.st_num} 이렇게 간단할 수가</span>
      {children}
    </>
  );
};

export default StudentDetail;
