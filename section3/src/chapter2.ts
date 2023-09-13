/**
 * Unknown 타입: 모든 타입의 슈퍼타입
 */
function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운 캐스팅
  let unknownVar: unknown;
  // let num: number = unknownVar;
}

/**
 * Never 타입: 모든 타입의 서브타입(공집합)
 */
function neverExam() {
  // neverFunc() 함수가 리턴하는 값은 공집합이다를 의미
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;

  // 따라서 never타입은 어떤 값도 저장되어선 안되는 변수의 타입으로 활용하면 좋다.
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // void타입은 undefined타입의 슈퍼타입이다.
  }

  let voidVar: void = undefined;
}

/**
 * any 타입: 타입 계층도에는 unknown타입의 서브타입으로 위치해있지만 모든 타입의 슈퍼타입이 될 수도 있고 never를 제외한 모든 타입의 서브타입이 될 수도 있는 타입계층도를 무시하는 치트키 타입이다.
 * 따라서 사용을 권장하지 않는다.
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅이지만 오류가 나지 않는다.
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // never은 예외이다.
  // neverVar = anyVar; // 오류
}
