// void: 공허 -> 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  // 반환값이 아무것도 없다.
  console.log("hello");
}

let a: void;
// a = 1; // 오류
// a = "hello"; // 오류
a = undefined;

// undefined와 null과 void의 차이
function func3(): undefined {
  console.log("hello");
} // 타입스크립트의 버전이 v5일 때는 오류였지만(무조건 undefined를 return해줘야함) v5.1부터는 void와 같이 undefined일 경우에도 반환 값이 없을 때를 허용하게 바뀌었다.
// https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#easier-implicit-returns-for-undefined-returning-functions

// never: 존재하지 않는 -> 불가능한 타입
function func4(): never {
  while (true) {} // 무한루프와 같이 정상적으로 반환할 수 없을 때 never로 타입을 정의한다.
}

function func5(): never {
  throw new Error();
}

let b: never;
// b = 1; // 오류
// b = {}; // 오류
// b = undefined; // 오류
// b = null; // 오류

let anyVar: any;
// b=anyVar; // 오류
