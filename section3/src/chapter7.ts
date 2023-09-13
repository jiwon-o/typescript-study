/**
 * 타입 좁히기 (타입 좁히기를 도와주는 표현을 타입 가드라고 함)
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

// value => number: toFixed
// value => string: toUpperCase
function func(value: number | string) {
  value; // number와 string 타입의 유니온 타입
  if (typeof value === "number") {
    console.log(value.toFixed()); // value의 타입을 number로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value의 타입을 string으로 추론
  }
}

function func2(value: number | string | Date) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "object") {
    console.log(value.getTime()); // Date 타입으로 추론
  }
}

function func3(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "object") {
    // console.log(value.getTime()); // 오류 (Date타입과 null타입 모두 object이므로)
  }
}

function func4(value: number | string | Date) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime()); // instanceof: Date객체인지 아닌지 판단해주는 연산자
  }
}

type Person = {
  name: string;
  age: number;
};

function func5(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // else if(value instanceof Person) {} // 오류
  // else if ("age" in value) {} // value가 null일 수도 있어서 오류
  else if (value && "age" in value) {
    // value가 null이 아닐때 value를 Person으로 추론
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
