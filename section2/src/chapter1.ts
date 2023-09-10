// number
let num1: number = 123; // (: number -> 타입 주석)
let num2: number = -123;
let num3: number = 0.123;
let num4: number = Infinity;
let num5: number = -Infinity;
let num6: number = NaN;

// num1 = "hello" // 오류
// num1.toUppercase() // 오류
num1.toFixed();

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// str1 = 123; // 오류
str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null; // ts에서는 허용 X -> tsconfig에 strictNullChecks: false로 설정

// 리터럴 타입 (리터럴: 값)
let numA: 10 = 10;
// numA = 12; // 오류

let strA: "hello" = "hello";
// let boolA: true = false; // 오류
