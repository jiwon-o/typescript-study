// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
};

function func() {
  type User = {}; // type도 스코프가 적용된다.
}

let user: User = {
  id: 1,
  name: "오지원",
  nickname: "wono",
  birth: "1997. 02. 21",
};

let user2: User = {
  id: 2,
  name: "김아무개",
  nickname: "kim",
  birth: "1996. 08. 04",
};

// 인덱스 시그니처
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  // ...
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 필수로 프로퍼티를 설정(위의 인덱스 시그니처와 타입이 일치해야한다.)
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
