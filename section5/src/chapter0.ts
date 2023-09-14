/**
 * 인터페이스
 */

interface Person {
  // 인터페이스 별칭 앞에는 I를 많이 붙이지만 무조건 좋진 않다 -> 헝가리안 표기법은 자바스크립트에서는 별로 안쓴다.
  readonly name: string;
  age?: number;
  // sayHi: () => void; // 함수 타입 표현식
  sayHi(): void; // 메서드 호출 시그니쳐(오버로딩 시 필요)
  sayHi(a: number, b: number): void;
}

// type 별칭과의 차이 - interface는 유니온이나 인터섹션이 불가능하다.
// type Type1 = number | string;
// type Type2 = number & string;

const person: Person = {
  name: "오지원",
  age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
