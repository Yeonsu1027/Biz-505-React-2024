import "../../css/stlist.css";

const StudentList = ({ studentList }) => {
  const viewList = studentList.map((item) => (
    <li key={item.st_num}>
      <p className="rigth">{item.st_grade}</p>
      <p>{item.st_name}</p>
      <p>{item.st_dept}</p>
    </li>
  ));
  return (
    <>
      <h1>학생리스트</h1>
      <ul className="stul">{viewList}</ul>
    </>
  );
};
export default StudentList;
