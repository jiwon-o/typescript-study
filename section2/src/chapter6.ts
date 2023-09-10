// any: 특정 변수의 타입을 우리가 확실히 모를때
// let var = 10;
// var = "hello"; // 오류
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

// any 타입은 런타임 에러를 발생시킬 수 있어 주의해야한다.

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류: any와 다르게 unknown 타입은 모든 값을 저장할 순 있지만 num 타입 등의 변수에 넣을 수는 없다.

if (typeof unknownVar === "number") {
  num = unknownVar; // 타입 정제를 활용해서 사용
}

// 따라서 변수에 저장할 값의 타입이 확실하지 않을 때에는 any보다 unknown을 사용하는 것이 좋다.(런타임 에러를 유발하지 않는다.)
