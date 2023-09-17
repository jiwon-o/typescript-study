/**
 * infer
 * 조건부 타입 내에서 특정 타입만 추론해올 수 있는 기능
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never; // infer R: 조건식이 참이 되게 만드는 타입을 추론하게 해주는 기능

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

type C = ReturnType<number>; // never -> () => infer R이 number타입의 슈퍼타입이 되는 경우는 없기 때문에 never가 반환이 된다.

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string
