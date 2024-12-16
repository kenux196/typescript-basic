// Enum type
// typescript only

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
console.log(Role);

enum Language {
  korean = 'ko',
  english = 'en',
}

const user11 = {
  name: 'admin',
  role: Role.ADMIN,
  language: Language.korean,
};
console.log(user11);

const user12 = {
  name: 'user12',
  role: Role.USER,
  language: Language.english,
};
console.log(user12);

// enum은 컴파일 결과 객체가 된다.

// any & unknown

// any: typescript only, 타입 검사 X
// any type은 최대한 사용 자제할 것. 타입 검사를 하지 않으므로 컴파일 단계에서 오류 검출 불가
let anyVar = 10;
// anyVar = 'hello' // 오류 발생

let anyVar2: any = 10;
anyVar2 = 'hello'; // 정상 동작.
anyVar2 = true;
anyVar2 = {};

// unknown type
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
