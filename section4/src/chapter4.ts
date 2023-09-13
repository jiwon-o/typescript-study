/**
 * 사용자 정의 타입가드
 */
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // 반환값이 true면 animal이 Dog이다.
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // if("isBark" in animal) {
  //   // 강아지
  // }else if("isScratch" in animal) {
  //   // 고양이
  // }
  if (isDog(animal)) {
    animal; // Dog로 추론
  } else if (isCat(animal)) {
    animal; // Cat으로 추론
  }
}
