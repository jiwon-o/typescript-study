/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // A의 타입: number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // B는 number타입

/**
 * 활용 예제
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string타입
let varB: StringNumberSwitch<string>; // number타입

// 오버로딩 시그니쳐
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hello my name is jiwon");
result.toUpperCase();
