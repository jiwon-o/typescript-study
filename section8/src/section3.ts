/**
 * 맵드 타입
 * 객체 타입 조작
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "오지원",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: "오지원", // id와 name은 수정이 안되므로 굳이 보낼 필요가 없다.
  age: 25,
});

// PartialUser 인터페이스를 만들어서 선택적 프로퍼티로 만들면 해결이 가능하지만 효율적이지 않다.
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 해결방법: 맵드 타입 - 인터페이스에서는 만들 수 없다.
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};
// 해석: id, name. age가 객체의 프로퍼티 key가 될 수 있고 User[key]라는 value를 가지는 타입이다.
// 선택적 프로퍼티로 변경하려면 []뒤에 한번만 ?를 붙여주면 된다.

type BooleanUser = {
  [key in keyof User]: boolean; // keyof 연산자는 모든 key를 유니온 형식으로 만들어주는 연산자
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
