import "@/css/join.css";

const Join = () => {
  return (
    <form className="join">
      <div>
        <input placeholder="USERNAME" name="m_id" />
      </div>
      <div>
        <input placeholder="비밀번호" name="m_pw" type="password" />
      </div>
      <div>
        <input
          placeholder="비밀번호확인"
          class="re_pw"
          type="password"
        />
      </div>
      <div>
        <input placeholder="NICKNAME" name="m_nick" />
      </div>
      <div>
        <button type="button" className="join button">
          회원가입
        </button>
      </div>
    </form>
  );
};

export default Join;
