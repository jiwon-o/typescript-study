/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입, 교집합 타입이 있다.
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean; // string number boolean 유니온 타입이라고 부른다.
a = "hello";
a = 1;
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 오류
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string; // number과 string의 교집합은 공집합이라 never타입이다.

type Intersection = Dog & Person;

let intersection1: Intersection = {
  // 모든 프로퍼티가 들어와야한다.
  name: "",
  color: "",
  language: "",
};
