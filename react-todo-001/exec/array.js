const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// nums 배열의 개수만큼 반복하면서 각각의 item 을
// num 매개변수에 담아 내부로 전달
// num 매개변수에 전달된 값을 console 에 출력
nums.forEach((num) => console.log(num));

// nums 배열 개수만큼 반복실행하면서 각각의 item 을 내부로 전달
// nums 의 item 은 num 매개변수를 통하여 내부로 전달
// 전달받은 매개변수에 100을 곱하여 return
// return 이 된다는 것은 다른 변수에 결과를 저장할 수 있다
// 이 두개는 같은코드이다

// map : 기존의 배열의 각 요소를 가공, 연산하여 새로운 배열 만들기
nums.map((num) => {
  return num * 100;
});
// 배열가공해서 새 배열만들기
const result = nums.map((num) => num * 100); // 중괄호 & 리턴문 생략 ver

console.log(result); // 콘솔출력값 : 100, 200...

// filter : 배열의 요소중에 특정한 조건에 맞는 요소만 추출하여
// 새로운 배열로 만들기
nums.filter((num) => {
  return num % 2 == 0;
});
const even = nums.filter((num) => num % 2 == 0);
console.log(even);
