/**
 * 함수 타입 정의
 */

// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는 함수
function func(a: number, b: number) {
  // 리턴값의 타입은 자동으로 추론해준다.
  return a + b;
}

/**
 * 화살표 합수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
// 선택적 매개변수는 필수 매개변수보다 앞에 오면 안된다.
function introduce(name = "오지원", tall?: number) {
  console.log(`name: ${name}`);
  // console.log(`tall: ${tall + 10}`); // 오류, tall은 undefined일 수도 있다.
  if (typeof tall === "number") {
    // 타입 가드 사용
    console.log(`tall: ${tall + 10}`);
  }
}
introduce("오지원", 175);
introduce("오지원"); // 오류, tall에 선택적 매개편수를 설정해준다.

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
