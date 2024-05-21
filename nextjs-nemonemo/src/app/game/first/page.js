import { createPlayData } from "@/app/api/nemo_play";
import { redirect } from "next/navigation";
import "@/css/game.css";
const first = () => {
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
    };

    await createPlayData(game1Data);
    redirect("/game/first"); // 한줄저장하고 다시 겜화면
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
              </div>
            </form>
          </div>
          <div class="main-delete">
            <button id="ALL_DELETE"></button>
          </div>
        </div>
        <div id="lives">목숨: </div>
        <div class="clear">
          <button id="clear">정답확인</button>
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
