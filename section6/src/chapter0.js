/**
 * 클래스
 */

let studentA = {
  name: "오지원",
  grade: "A",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// let studentB = {
//   name: "홍길동",
//   grade: "B",
//   age: 27,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   introduce() {
//     console.log("안녕하세요");
//   },
// };

// 객체로 구현하면 중복이 많이 됨
// 따라서 클래스로 구현함

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

let studentB = new Student("홍길동", "B", 27); // 클래스를 호출하여 객체 생성
console.log(studentB);
// 클래스를 이용해서 만든 객체: 인스턴스
// studentB: 스튜던트 인스턴스
studentB.study();
studentB.introduce();

// Student 클래스의 파생 클래스를 만들 때 중복이 많이 된다.
// 상속을 사용한다.
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("오지원", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
