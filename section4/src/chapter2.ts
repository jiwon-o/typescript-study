/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입 반환
let b: B = () => 10; // number 리터럴 타입 반환

a = b; // 가능
// b = a; // 불가능

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 불가능: 매개변수에 대해서 호환될 때는 업캐스팅일때 불가능하다.
d = c; // 가능

// 왜?
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅이지만 안된다.

// 왜?
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // 불가능 - Animal 타입의 프로퍼티로는 color에 없다.
};

// 왜?
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color); // 가능
};

// 2.2. 매개변수의 개수가 다를때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 불가능
