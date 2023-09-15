/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // number가 나와야되지만 number | string 타입이 된다. -> 분산적 조건부 타입
// 조건부 타입이 분리되서 들어간다.
// StringNumberSwitch<number> | StringNumberSwitch<string>
// string | number

let d: StringNumberSwitch<boolean | number | string>; // number | string | number -> union이기 때문에 string | number

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// number | string | boolean일 것 같지만
// Exclude<number, string> |
// Exclude<string, string |
// Exclude<boolean, string>
// 이므로 number | never | boolean이 되므로 number | boolean이 된다.

// Extract: 추출하다
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 분산적인 조건부 타입을 사용하고 싶지 않다면?
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
type C = StringNumberSwitch2<boolean | number | string>;
