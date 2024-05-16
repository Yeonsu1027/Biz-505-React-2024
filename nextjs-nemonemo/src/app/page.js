// 메인화면
"use client";
import { useEffect, useState } from "react";

import { selectAll } from "@/app/api/speech";

import { findClearData } from "@/app/api/clear.js";
import Image from "next/image";

export default function Home() {
  const [clearData, setClearData] = useState({});
  const [playdata, setPlaydata] = useState([]); // 게임 플레이정보

  // 조회 테스트 --------
  const [speech, setSpeech] = useState([]);
  useEffect(() => {
    const spFetch = async () => {
      const result = await selectAll();
      if (Array.isArray(result)) {
        setSpeech(result);
      } else {
        console.error("Error: selectAll() did not return an array");
      }
    };
    spFetch();
  }, []);

  const viewList = speech.map((item) => (
    <li>
      <strong>{item.s_speaker}</strong>
    </li>
  ));
  //-----------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllClearData();
        setClearData(data);
      } catch (error) {
        console.error("Error fetching clear data:", error);
      }
    };
    fetchData();
  }, []);

  // ------------
  const fetchAllClearData = async () => {
    const clearData = [];

    // 1~5단계 클리어데이터 조회
    for (let i = 1; i <= 5; i++) {
      try {
        // c_id는 고정값으로 '11'을 사용하고, 레벨은 반복문 변수 i로 지정하여 호출
        const data = await findClearData("11", i);
        clearData.push(data); // 클리어 데이터를 배열에 추가
      } catch (error) {
        console.error(
          "Error fetching clear data for level",
          i,
          ":",
          error
        );
      }
    }

    console.log("클리어데이터", clearData[0]);
    return clearData; // 모든 레벨에 대한 클리어 데이터 반환
  };
  // -------------------------------------------

  return (
    <main>
      <div className="HM-home_container">
        <div className="HM-home_top">
          <div className="HM-home_first_menu">
            <div className="HM-home_weather">
              <label>
                <span>날씨</span>
              </label>
            </div>
            <div className="HM-home_img">
              <img src="/img/sun.png" />
              <img src="/img/cloud.png" />
              <img src="/img/rainy.png" />
              <img src="/img/snow.png" />
            </div>
            <div>
              <label className="HM-home_cal">
                <span>년</span> <span>월</span>
                <span>일</span>
              </label>
            </div>
          </div>
          {viewList}
          <div className="HM-home_second_menu">
            <label>제목 : 수족관을 다녀왔다!</label>
          </div>
        </div>
        <div className="HM-home_picture">
          <div>
            <div id="LEVEL3" className="YS_p_div">
              <Image
                src="/img/question.png"
                width={200}
                height={200}
              />
            </div>
            <div id="LEVEL1" className="YS_p_div">
              {clearData.length > 0 && clearData[0]?.c_clear === 1 ? (
                <img
                  className={`YS_picture_c ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear !== 1 &&
                    clearData[2]?.c_clear !== 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "fade-in"
                      : ""
                  }`}
                  src="/img/smile.png"
                  alt="Smile Image"
                  width={200}
                  height={200}
                />
              ) : (
                <img
                  className={`YS_picture ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear !== 1 &&
                    clearData[2]?.c_clear !== 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "next_level"
                      : ""
                  }`}
                  src="/img/question.png"
                  alt="Question Image"
                  width={200}
                  height={200}
                />
              )}
            </div>
          </div>
          <div>
            <div id="LEVEL4" className="YS_p_div">
              <Image
                src="/img/question.png"
                width={200}
                height={200}
              />
            </div>
            <div id="LEVEL2" classNames="YS_p_div">
              <Image
                src="/img/question.png"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="HM-home_diary">
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
        </div>
      </div>
    </main>
  );
}
