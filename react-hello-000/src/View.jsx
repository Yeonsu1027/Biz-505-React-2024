/**
 * 부모 컴포넌트로부터 2개의 props 를 전달받기
 *
 */

// Item.jsx 의   아래 코드를 여기다 집어넣은것
// const Item = (props) => {
// 객체의 구조분해라고
// props 가 받은 여러 변수들을 개별 변수로 분해하라
//const { name, age } = props; // name 과 age 라는 변수가 생성된다
const View = ({ name, age }) => {
  return (
    <>
      <h2>이름 : {name}</h2>
      <h2>나이 : {age}</h2>
    </>
  );
};

export default View;
