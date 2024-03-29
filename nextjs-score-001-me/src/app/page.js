"use client";
// import Image from "next/image";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList";
import { useEffect, useState } from "react";
// import 한 selectAll 함수를 st_selectAll 이라는 이름으로 사용하겠다
import { selectAll as st_selectAll } from "@/app/api/student.js";
import StudentDetail from "./comps/StudentDetail";
import ScoreList from "./comps/ScoreList";
import { findByStNum } from "./api/score";

// 디테일 만들어보기 함수 임폴트 -----------------
import { stdetail } from "@/app/api/student.js";
// ------------------------------------------------

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);

  // -------- 디테일 만들어보자 -------
  const [studentDetail, setStudentDetail] = useState([]);
  // ------------------------------------------------------
  const [student, setStudent] = useState({});

  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll(); // student.js 에서만든 학생테이블데이터 호출함수
      if (result) {
        setStudentList([...result]);
        setStudent(result[0]); // 초기값 세팅 null 익셉션방지
      }
    };
    stdFetch();
    // 빈 배열을 두 번째 인자로 넣어, 이 효과가 컴포넌트의 마운트 시에만 실행되도록 합니다.
    // useEffect의 두 번째 인자는 의존성 배열(dependencies array)이라고 하며,
    // 이 배열 안에 지정된 변수들의 값이 변경될 때마다 첫 번째 인자로 넘겨진 콜백 함수가 다시 실행됩니다.
  }, []);

  useEffect(() => {
    const scoreFetch = async () => {
      // ?? 앞에있는값이 null 이면 뒤에 값을 채워넣어라
      const result = await findByStNum(student?.st_num ?? "S0001"); // score.js 에서 만든 점수가져오는 함수(학번)
      setScoreList([...result]);
    };
    scoreFetch();
  }, [student]); // student 가 변하면 반응해라

  // -----------------------------------------
  // 디테일 만들어보자~ 특정한 학생의 학생정보 가져오기..
  useEffect(() => {
    const stdDetailFetch = async () => {
      const result = await stdetail(student?.st_num ?? "S0001");
      setStudentDetail([...result]);
    };
    stdDetailFetch();
  }, [student]);
  // -------------------------------------------

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList
          studentList={studentList}
          setStudent={setStudent}
        />
      </section>
      <section className={styles.detail}>
        <StudentDetail
          studentDetail={studentDetail}
          student={student}
        >
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
