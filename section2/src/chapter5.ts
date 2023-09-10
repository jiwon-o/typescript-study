// enum 타입: 열거형 타입 - 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

// enum Role {
//   ADMIN, // 숫자를 지정해주지 않아도 0, 1, 2... 로 지정해준다.
//   USER,
//   GUEST,
// }

// enum Role {
//   ADMIN = 10, // 처음을 10으로 설정해주면 10, 11, 12... 로 지정된다.
//   USER,
//   GUEST,
// }

// enum Role {
//   ADMIN,
//   USER = 10, // 0, 10, 11로 지정된다.
//   GUEST,
// }

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "오지원",
  role: Role.ADMIN, // 0
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1
  language: Language.english,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2
};
console.log(user1, user2, user3);

// enum은 컴파일 결과 js에서 사라지지 않고 객체로 변환되기 때문에 Role.ADMIN을 값을 사용하듯이 사용할 수 있다.
