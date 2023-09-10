// object
let user1: object = {
  id: 1,
  name: "이정환",
};

// user.id; // 오류 (타입스크립트의 object 타입은 object 그 자체라서 그 안에있는 프로퍼티나 메서드에 뭐가 있는지는 알 수 없다.)

// 따라서 객체 리터럴 타입을 사용해야 한다.
let user2: {
  id: number;
  name: string;
} = {
  id: 2,
  name: "오지원",
};

let dog: { name: string; color: string } = { name: "돌돌이", color: "brown" };
// 구조적 타입 시스템(Property Based Type System): 타입스크립트의 object는 객체의 프로퍼티나 메서드가 어떻게 구성되어 있는지, 즉 객체의 구조를 기준으로 타입을 정의한다.
// C언어나 JS 같은 경우에는 이름을 기준으로 정의한다. -> 명목적 타입 시스템

///////////////////////////////
// 선택적 프로퍼티(옵셔너 프로퍼티)
let user: {
  id?: number; // ?: user 객체에는 id라는 프로퍼티가 있어도 되고 없어도 됨
  name: string;
} = {
  id: 2,
  name: "오지원",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 누군가 이렇게 apiKey 객체를 임의로 수정할 수 있음 -> readonly 추가
