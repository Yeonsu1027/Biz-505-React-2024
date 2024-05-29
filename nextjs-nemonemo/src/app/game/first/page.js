import { playDataCheck } from "@/app/api/nemo_play";
import { compareNemoData } from "@/app/api/nemo";

import { redirect } from "next/navigation";
import "@/css/game.css";

const first = () => {
  // 정답확인용
  const checkCorrect = async (formData) => {
    "use server";
    await compareNemoData(formData);
  };

  //-- 게임정보생성
  const gameaction = async (formData) => {
    "use server";
    const game1Data = {
      p_id: "11", // 문자열을 정수로 변환
      p_num: parseInt(formData.get("p_num"), 10), // 문자열을 정수로 변환
      p_row_num: parseInt(formData.get("p_row_num"), 10), // 문자열을 정수로 변환
      p_block1: formData.get("p_block1") === "on" ? 1 : 0,
      p_block2: formData.get("p_block2") === "on" ? 1 : 0,
      p_block3: formData.get("p_block3") === "on" ? 1 : 0,
      p_block4: formData.get("p_block4") === "on" ? 1 : 0,
      p_block5: formData.get("p_block5") === "on" ? 1 : 0,
      ...(formData.get("p_block6") !== null && {
        p_block6: formData.get("p_block6") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block7") !== null && {
        p_block7: formData.get("p_block7") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block8") !== null && {
        p_block8: formData.get("p_block8") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block9") !== null && {
        p_block9: formData.get("p_block9") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block10") !== null && {
        p_block10: formData.get("p_block10") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block11") !== null && {
        p_block11: formData.get("p_block11") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block12") !== null && {
        p_block12: formData.get("p_block12") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block13") !== null && {
        p_block13: formData.get("p_block13") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block14") !== null && {
        p_block14: formData.get("p_block14") === "on" ? 1 : 0,
      }),
      ...(formData.get("p_block15") !== null && {
        p_block15: formData.get("p_block15") === "on" ? 1 : 0,
      }),
    };

    // await createPlayData(game1Data);
    await playDataCheck(game1Data);
    // redirect("/game/first"); // 한줄저장하고 다시 겜화면..
    // 안해도 화면안바뀌네
  };

  return (
    <>
      <section class="game-container">
        <div class="main-hint-container">
          <div class="blank"></div>
          <div class="main-column-hint">
            <div id="column1-hint"></div>
            <div id="column2-hint"></div>
            <div id="column3-hint"></div>
            <div id="column4-hint"></div>
            <div id="column5-hint"></div>
          </div>
        </div>
        <div class="main-form-container">
          <div class="main-row-hint">
            <div id="row1-hint"></div>
            <div id="row2-hint"></div>
            <div id="row3-hint"></div>
            <div id="row4-hint"></div>
            <div id="row5-hint"></div>
          </div>
          <div class="main-input-box">
            <form method="POST" action={gameaction}>
              <div class="p_row_num1 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="true" />
                <input name="p_row_num" value="1" hidden="true" />
                <button>대충저장버튼</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div class="p_row_num2 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="true" />
                <input name="p_row_num" value="2" hidden="true" />
                <button>대충저장버튼</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div class="p_row_num3 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="true" />
                <input name="p_row_num" value="3" hidden="true" />
                <button>대충저장버튼</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div class="p_row_num4 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="true" />
                <input name="p_row_num" value="4" hidden="true" />
                <button>대충저장버튼</button>
              </div>
            </form>
            <form method="POST" action={gameaction}>
              <div class="p_row_num5 row">
                <input type="checkbox" name="p_block1" />
                <input type="checkbox" name="p_block2" />
                <input type="checkbox" name="p_block3" />
                <input type="checkbox" name="p_block4" />
                <input type="checkbox" name="p_block5" />
                <input name="p_num" value="1" hidden="true" />
                <input name="p_row_num" value="5" hidden="true" />
                <button>대충저장버튼</button>
              </div>
            </form>
          </div>
          <div class="main-delete">
            <button id="ALL_DELETE"></button>
          </div>
        </div>
        <div id="lives">목숨: </div>
        <div class="clear">
          <form method="POST" action={checkCorrect}>
            <input name="p_id" value="1" hidden="true" />
            <input name="p_num" value="1" hidden="true" />
            <button id="clear">정답확인</button>
          </form>
        </div>
        <div id="CLEAR_IS"></div>
      </section>
      <div class="HM-main_hover_box"></div>
      <nav class="HM-main_nav">
        <ul>
          <li>홈</li>
          <li>
            <form
              action="${rootPath}/user/logout"
              onclick="this.submit()"
            >
              로그아웃
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default first;

// 할거 : 정답확인버튼에 정답확인핸들러 만들어서 붙이기
// 플레이데이터, 정답비교..
// 플레이js에다가 지우개만들기

// 정답확인 버튼을 form 안에넣고..
// action에 정답테이블이랑 플레이 정보 조회하는 거만들어서 붙이기
