import "./css/main.css";

const Home1 = () => {
  return (
    <>
      <div class="HM-home_container">
        <div class="HM-home_top">
          <div class="HM-home_first_menu">
            <div class="HM-home_weather">
              <label>
                <span>날씨</span>
              </label>
            </div>
            <div class="HM-home_img">
              <img src="/img/sun.png" alt="" />
              <img src="/img/cloud.png" alt="" />
              <img src="/img/rainy.png" alt="" />
              <img src="/img/snow.png" alt="" />
            </div>
            <div>
              <label class="HM-home_cal">
                <span>년</span>
                <span>월</span>
                <span>일</span>
              </label>
            </div>
          </div>
          <div>
            <label>제목 : 수족관을 다녀왔다!</label>
          </div>
        </div>
        <div class="HM-home_picture">
          <div>
            <div id="LEVEL3" class="YS_p_div">
              <img src="/img/question.png" alt="" />
            </div>
            <div id="LEVEL1" class="YS_p_div">
              <img src="/img/question.png" alt="" />
            </div>
            <div id="LEVEL4" class="YS_p_div">
              <img src="/img/question.png" alt="" />
            </div>
            <div id="LEVEL2" class="YS_p_div">
              <img src="/img/question.png" alt="" />
            </div>
          </div>
          <div class="HM-home_diary">
            <section class="YS_border-bottom">
              <h2 class="YS_diary_row">1</h2>
            </section>
            <section class="YS_border-bottom">
              <h2 class="YS_diary_row">2</h2>
            </section>
            <section class="YS_border-bottom">
              <h2 class="YS_diary_row">3</h2>
            </section>
            <section class="YS_border-bottom">
              <h2 class="YS_diary_row">4</h2>
            </section>
            <section class="YS_border-bottom">
              <h2 class="YS_diary_row">5</h2>
            </section>
            <section class="YS_border-bottom">
              <h2 class="YS_diary_row">6</h2>
            </section>
          </div>
        </div>

        <div class="conversationBox-back">
          <img src="/img/boy.png" class="avatar" alt="A's avatar" />
          <div id="conversationBox" class="conversation-box">
            <div id="speechContainer" class="speech-container">
              <div class="speech-part" style={{ display: "none" }}>
                <span class="num" style={{ display: "none" }}></span>
                <span
                  class="speaker"
                  style={{ display: "none" }}
                ></span>
                <span class="message"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home1;
