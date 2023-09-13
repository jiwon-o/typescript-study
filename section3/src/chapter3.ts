/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 가능
// num2 = num1; // 불가능

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
};

animal = dog; // 가능
// dog = animal; // 불가능
// animal: 슈퍼타입, dog: 서브타입

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "타입스크립트의 모든것",
  price: 30000,
  skill: "typescript",
};

book = programmingBook; // 가능
// programmingBook = book; // 불가능

/**
 * 초과 프로퍼티 검사: skill과 같은 초과 프로퍼티를 안되도록 막는 것
 */
let book2: Book = {
  name: "타입스크립트의 모든것",
  price: 30000,
  // skill: "typescript", // 불가능, 왜? 초과 프로퍼티 검사때문에
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "타입스크립트의 모든것",
  price: 30000,
  // skill: "typescript", // 초과 프로퍼티 검사 발동
});
func(programmingBook); // 따라서 미리 객체를 만들어서 넣어야한다.
