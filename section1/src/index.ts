// npm init
// npm i @types/node
// npm install typescript -g
// tsc -v
// tsc section1/src/index.ts (tsc 실행)
// node section1/src/index.js
// npm install ts-node -g (ts를 한번에 실행할 수 있는 도구)
// ts-node section1/src/index.ts (tsc 실행)

// console.log("Hello TypeScript");
// const a: number = 1;

////////////////////////////////////////

// tsc --init (tsc 컴파일러 옵션 설정 - tsconfig.json 생성)

// const func = () => console.log("hello");
// import { hello } from "./hello";

// hello();
const a = 1; // hello.ts에도 const a를 선언하면 오류가 뜬다 -> 왜냐하면 모든 타입스크립트 파일을 전역 모듈로 보기 때문이다.

// export {}; // 방법1) 한번이라도 사용하면 이 파일을 독립된 모듈로 인식해서 오류가 나지 않는다.
// 방법2) tsconfig에서 moduleDetection: force로 설정한다.(자동으로 export, import 추가)
