/**
 * 제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

// String으로도 가능하게 하려면?
// StringList 클래스를 하나 더 만들어야 한다. 이를 제네릭 클래스로 해결할 수 있다.

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]);
numberList2.pop();
numberList2.push(4);
numberList2.print();

const stringList = new List(["a", "b"]);
stringList.pop();
stringList.push("c");
stringList.print();
