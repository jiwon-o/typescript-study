/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }
// 이런식으로 하면 중복이 많이 발생한다. - 인터페이스 확장 사용

interface Dog extends Animal {
  // name: "hello"; // name을 리터럴 방식으로 다시 정의하고 싶다면 다시 정의하고 싶은 타입(string 리터럴)이 원본 타입(string)의 서브타입이어야 한다.
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "hello",
  age: 0,
  isBark: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
