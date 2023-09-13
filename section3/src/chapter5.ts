/**
 * 타입 추론
 */

// 점진적인 type system
let a = 10; // 타입을 붙여주지 않더라도 알아서 타입을 추론해준다.
let b = "string";
let c = {
  id: 1,
  name: "오지원",
  profile: {
    nickname: "wono",
  },
  urls: ["http://wono.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello"; // 함수는 초기값이 아니라 반환값을 추론해준다.
}

// 모든 상황에 타입을 잘 추론해주지는 않는다.
// function func(param) {

// } // 오류: param에 어떤 타입의 값이 들어가는지 몰라서

// 예외적인 타입
// any타입의 진화라고 함
let d; // any 타입으로 추론 (암묵적 any type)
d = 10;
d; // number 타입으로 진화

d = "hello";
d; // string 타입으로 진화
// 하지만 암묵적 any타입으로 선언하는 것은 좋지 않다.

const num = 10; // const로 선언한 변수의 타입은 리터럴타입으로 추론이 된다.
const str = "hello";

let arr = [1, "hello"]; // string과 number의 union타입으로 추론된다.

// let으로 선언한 타입이 const로 선언한 변수의 타입보다 범용성이 넓기 때문에 이를 '타입 넓히기'라고 한다.
