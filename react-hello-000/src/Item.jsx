// props 는 키워드
const Item = (props) => {
  // 객체의 구조분해라고
  // props 가 받은 여러 변수들을 개별 변수로 분해하라
  const { name, age } = props; // name 과 age 라는 변수가 생성된다

  return (
    <>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <div>
        {name}
        {age}
      </div>
    </>
  );
};

export default Item;
