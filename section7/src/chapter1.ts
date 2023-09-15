/**
 * 첫번째 사례
 */

function swap<T>(a: T, b: T) {
  return [b, a];
}

// const [a, b] = swap("1", 2); // 첫번째 인수의 T가 string으로 할당이 되어서 두번째 인수에 number 타입이 할당될 수 없다. 이럴때는 타입 변수를 두개로 설정한다.

function swap2<T, U>(a: T, b: U) {
  return [b, a];
}

const [c, d] = swap2("1", 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: T[]) {
  return data[0]; // T[]: unknown[] 타입으로 추론됨
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue(["a", "b", "c"]); // "a"

// 튜플타입일때
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let tup = returnFirstValue2([1, "a", "b"]); // tup의 타입: string | number -> number로 해주기 위해선?
let tup2 = returnFirstValue2([1, "a", "b"]); // 함수 인수를 튜플 타입으로 쓴다.

/**
 * 세번째 사례
 */

// length가 number인 프로퍼티를 가지고 있는 객체를 확장한 T
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });

// let var4 = getLength(10); // length 프로퍼티가 없어 오류가 난다.
