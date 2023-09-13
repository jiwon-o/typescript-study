/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // as: 초기화 값의 타입을 직접 단언함.
person.name = "오지원";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개", // 초과 프로퍼티 발동
} as Dog;

// 어쩔 수 없이 breed를 넣어야할 때 as로 단언한다.

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// A가 B의 서브타입
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // 오류 (서브타입과 슈퍼타입 관게가 아니기 때문에)

// 억지로 오류를 없애려면 (좋은 방법 X)
let num4 = 10 as unknown as string;

/**
 * const 단언
 */
let num5 = 10 as const; // const 단언은 let으로 선언했을 때 const로 선언한 것과 동일한 효과를 보도록 만드는 방법

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 readonly 읽기 전용 프로퍼티로 추론된다.

// cat.name = '고양이'; // 불가능

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
  author: "오지원",
};

// const len: number = post.author?.length; // ?: 옵셔널 체이닝
// undefined가 나올 수도 있으므로 오류가 난다.

const len2: number = post.author!.length; // !를 붙여주면 오류가 사라진다.
