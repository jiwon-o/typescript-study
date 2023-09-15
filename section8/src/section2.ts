/**
 * keyof 연산자
 * 객체 타입에서 사용
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}

const person: Person = {
  name: "오지원",
  age: 27,
};

getPropertyKey(person, "name");

// person의 프로퍼티가 10개~20개로 늘어난다면 인수 key의 타입을 유니온 타입으로 설정하는 것은 좋지 않은 방법이다.

// keyof 연산자
function getPropertyKey2(person: Person, key: keyof Person) {
  return person[key];
}

// typeof 연산자
type Animal = typeof animal; // 객체를 따로 만들어주지 않아도 type을 추론해준다.

const animal = {
  name: "기린",
  color: "yellow",
};

function getPropertyKey3(animal: Animal, key: keyof typeof animal) {
  return animal[key];
}
