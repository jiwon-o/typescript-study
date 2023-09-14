/**
 * 선언 합침
 */

// 타입 별칭은 두개의 동일한 이름으로 중복되면 오류가 나지만 인터페이스는 오류가 나지 않는다.
// type Person = {
//   name: string;
// }

// type Person = {
//   age: number;
// }

interface Person {
  name: string;
}

interface Person {
  // name: number; // 똑같은 프로퍼티를 다른 타입으로 정의하면 오류가 난다. 이를 충돌이라고 한다. 반드시 동일한 타입으로 정의해줘야한다.
  age: number;
}

// 왜? 자동으로 모두 합쳐지기 때문이다. 이를 선언 합침이라고 한다.

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강할 때 많이 사용한다.
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 프로퍼티를 추가해야할 때 선언합침을 사용한다.
};
