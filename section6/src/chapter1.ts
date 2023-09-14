/**
 * 타입스크립트의 클래스
 */

// const employee = {
//   name: "오지원",
//   age: 27,
//   position: "developer",
//   work() {
//     console.log("일함");
//   },
// };

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeA = new Employee("오지원", 27, "developer");
employeeA.work();

// Employee 클래스는 타입으로도 활용이 된다.
const employeeB: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

// 클래스 확장
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
