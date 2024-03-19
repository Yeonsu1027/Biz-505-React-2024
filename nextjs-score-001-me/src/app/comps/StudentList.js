import "../../css/stlist.css";
import ScoreList from "./ScoreList";

const StudentList = ({ studentList, setStudent }) => {
  const viewList = studentList.map((item) => {
    return (
      <li key={item.st_num} onClick={() => setStudent(item)}>
        <p className="rigth">{item.st_num}</p>
        <p>{item.st_name}</p>
        <p>{item.st_dept}</p>
      </li>
    );
  });
  return (
    <>
      <h1>학생리스트</h1>
      <ul className="stul">{viewList}</ul>
    </>
  );
};

export default StudentList;
