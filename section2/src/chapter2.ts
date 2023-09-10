// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];
let boolArr: Array<boolean> = [true, false]; // 제네릭 문법

// 배열에 들어가는 요소의 타입이 다양할 경우
let multArr: (number | string)[] = [1, "hello"]; // 유니온 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플타입: 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 오류
// tup1 = ["1", "2"]; // 오류
let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); // 가능 -> 배열 메서드를 사용할 때는 튜플의 길이 제한이 발동하지 않음(js 실행 때는 그냥 배열이라고 생각하기 때문에) -> 주의해야함
tup1.pop(); // 가능

const users: [string, number][] = [
  ["오지원", 1],
  ["김아무개", 2],
  ["박아무개", 3],
  // [4, "최아무개"], // 이럴 때를 방지하기 위해 튜플을 사용
];
