// 메인화면
"use client";
import { useEffect, useState } from "react";

import { findClearData } from "@/app/api/clear";

export default function Home() {
  const [clearData, setClearData] = useState([]); // 클리어데이터변경에따라 화면달라야하니..?
  const [playdata, setPlaydata] = useState([]); // 게임 플레이정보
  const [menu, setMenu] = useState([]); // 이거값을 바꿔서.. 화면전환..

  useEffect(() => {
    const fetchClearData = async () => {
      try {
        const data = await findClearData();
        setClearData(data);
      } catch (error) {
        console.error("Error fetching clear data:", error);
      }
    };
    fetchClearData();
  }, []);

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
              <img src="@/img/sun.png" />
              <img src="@/img/cloud.png" />
              <img src="@/img/rainy.png" />
              <img src="@/img/snow.png" />
            </div>
            <div>
              <label className="HM-home_cal">
                <span>년</span> <span>월</span>
                <span>일</span>
              </label>
            </div>
          </div>
          <div className="HM-home_second_menu">
            <label>제목 : 수족관을 다녀왔다!</label>
          </div>
        </div>
        <div className="HM-home_picture">
          <div>
            <div id="LEVEL3" className="YS_p_div">
              <img src="@/img/question.png" />
            </div>
            <div id="LEVEL1" className="YS_p_div">
              <img src="@/img/question.png" />
            </div>
            <div id="LEVEL4" className="YS_p_div">
              <img src="@/img/question.png" />
            </div>
            <div id="LEVEL2" classNames="YS_p_div">
              <img src="@/img/question.png" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
