/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 해석: Character클래스는 CharacterInterface 인터페이스를 구현한다. interface는 설계도, class는 구현
// 인터페이스는 무조건 public 필드만 정의할 수 있어 private, protected를 사용할 수 없다.
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
