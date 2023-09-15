/**
 * 여러가지 타입 조작 방법: 제네릭, 인덱스드 엑세스 타입, keyof 연산자, 맵드 타입, 탬플릿 리터럴 타입, 조건부 타입
 * 인덱스드 엑세스 타입
 */

// 객체 예시
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "오지원",
  },
};

// author의 id와 name을 붙여서 출력해주는 함수
// 방법 1) 객체 리터럴 타입으로 타입 정의
function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`${author.name}-${author.id}`);
}

printAuthorInfo(post.author);

// 단점) Post의 author에 age 프로퍼티를 추가한다면 객체 리터럴 타입에도 추가해줘야한다.

// 방법 2) 인덱스드 엑세스 타입
// - 객체 타입에서 특정 프로퍼티의 타입을 뽑아서 변수에 정의해 줄수 있도록 도와주는 문법
function printAuthorInfo2(author: Post["author"]) {
  // "author"는 스트링 변수가 아니라 타입이다.
  console.log(`${author.name}-${author.id}`);
}

// 장점) 프로퍼티의 내용이 수정되어도 별도로 추가적인 작업을 해주지 않아도 된다.
// 팁) author 프로퍼티에서 id 프로퍼티 타입만 가져오고 싶으면?
function printAuthorInfo3(id: Post["author"]["id"]) {
  console.log(`${id}`);
}

// 배열 예시
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo4(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "오지원",
  },
};

// 튜플 방법
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number]; // string | number | boolean
