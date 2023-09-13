/**
 * 서로소 유니온 타입
 * -> 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */
type Admin = {
  tag: "ADMIN"; // 태그 타입을 리터럴 타입으로 설정해 줌으로써 모든 타입을 서로소 관계로 만들어준다.
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}점 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}
// 주석이 없다면 user가 무엇인지 알아내기 힘들다. 따라서 객체에 tag를 붙여준다.

function login2(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }

  // switch문을 사용하면 가독성이 더 좋아진다.
  switch (user.tag) {
    case "ADMIN":
    case "MEMBER":
    case "GUEST":
  }
}

/**
 * 복습겸 한가지 더 사례
 */
// 비동기 작업의 결과를 처리하는 객체
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// const loading: AsyncTask = {
//   state: "LOADING",
// };

// const failed: AsyncTask = {
//   state: "FAILED",
//   error: {
//     message: "오류 발생 원인은 ~~",
//   },
// };

// const success: AsyncTask = {
//   state: "SUCCESS",
//   response: {
//     data: "데이터 ~~",
//   },
// };

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      // console.log(`에러 발생: ${task.error?.message}`); // 옵셔널 체이닝을 사용하는 것은 안전하지 않다. 따라서 AsyncTask를 서로소 유니온 타입으로 만들어준다.
      console.log(`에러 발생: ${task.error.message}`);
      break;
    case "SUCCESS":
      // console.log(`성공: ${task.response?.data}`);
      console.log(`성공: ${task.response.data}`);
      break;
  }
}
