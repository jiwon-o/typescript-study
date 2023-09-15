/**
 * 제네릭
 * -> 일반적인, 포괄적인
 */

function func(value: string) {
  return value;
}

// 스트링이 아니라 num이나 boolean을 인수로 하고 싶다면?
// 1. 인수 타입을 any타입으로 설정한다.(추천 X)
// 2. unknown 타입으로 설정한다.(추천 X) - unknown 타입은 어떠한 계산, 메서드도 할 수 없는 전체 집합이기 때문에
// 3. 제네릭 함수로 만든다.(원하는 인수에 따라 반환값의 타입을 가변적으로 정해줄 수 있다.)
// let num = func(10);
// let bool = func(true);

function func2<T>(value: T): T {
  // <T>: 타입 변수 선언
  return value;
}

let num2 = func2(10); // type: number
let bool2 = func2(true); // type: boolean
let str2 = func2("hello"); // type: string

let arr = func2([1, 2, 3]); // type: number[]

// 타입 T에 튜플 타입으로 추론하고 싶다면?
let arr2 = func2<[number, number, number]>([1, 2, 3]); // type: [number, number, number]
