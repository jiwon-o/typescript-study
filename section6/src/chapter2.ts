/**
 * 접근 제어자
 * access modifier
 * public, private, protected
 */

class Employee {
  // 필드
  private name: string;
  protected age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee("오지원", 27, "developer");
// employee.name = "홍길동"; // private일 때는 클래서 외부에선 접근 불가능 (내부 메서드에서는 접근 가능)
// employee.age = 30; // protected일 때도 외부에선 접근 불가능
employee.position = "디자이너";

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

  func() {
    //   this.name; // 파생 클래스에서도 private는 접근 불가능
    this.age; // 외부에선 접근 불가하지만 파생 클래스에서는 접근 가능하게 하려면 protected를 사용한다.
  }
}

// 생성자에 접근 제어자를 붙이면 필드와 this.~를 자동으로 생성한다.
class EmployeeB {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
