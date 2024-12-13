// Array & Tuple

// single type array
let numArr: number[] = [1, 2, 3];
console.log('🚀 ~ numArr:', numArr);
let strArr: string[] = ['apple', 'banana', 'mango', 'orange'];
console.log('🚀 ~ strArr:', strArr);
let boolArr: Array<boolean> = [true, false, true];
console.log('🚀 ~ boolArr:', boolArr);

// multi type array
let multiArr: (number | string)[] = [1, 'hello', 2, 'world', 3, 'typescript'];
console.log('🚀 ~ multiArr:', multiArr);

// multi dimension array
let multiDimensionArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];
console.log('🚀 ~ multiDimensionArr:', multiDimensionArr);

// tuple
let tuple1: [number, number] = [1, 2];
tuple1.push(1);
tuple1.push(1);
tuple1.push(1);
tuple1.push(1);
console.log('🚀 ~ tuple1:', tuple1);

const users: [string, number][] = [
  ['kenux', 1],
  ['alise', 2],
  ['iron man', 3],
  ['hulk', 4],
  // [5, 'winter'], // type check error
];
console.log('🚀 ~ users:', users);

// object type

const user1: object = {
  id: 1,
  name: 'kenux',
};
// user1.id; // 에러 발생.
// 타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입이기 때문
// 따라서, 위 타입은 객체의 프로퍼티에 대한 정보를 전혀 가지고 있지 않다.

// 객체 리터럴 타입
const user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'kenux',
};
user2.id; // 프로퍼티 접근 가능.

// 선택적 프로퍼티
let user3: {
  id?: number; // optional
  name: string;
} = {
  id: 1,
  name: 'kenux',
};
user3 = {
  name: 'kenux1',
};

// 읽기 전용
let user4: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: 'kenux',
};
// user4.name='hulk' // 오류 발생 읽기 전용
