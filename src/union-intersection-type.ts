// Algebraic type (대수 타입)

// Union(합집합) 타입
let a: string | number;

a = 1;
a = 'hello';
// a = true; // error!

let arr: (number | string | boolean)[] = [1, 'hello', true];
console.log(arr);
arr.push('kenux');
console.log(arr);

type Dog = {
  name: string;
  color: string;
};
const dogA = {
  name: 'happy',
  color: 'black',
};

// arr.push(dogA) // error!

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
let union1: Union1 = {
  name: 'abc',
  color: 'black',
};
let union2: Union1 = {
  name: 'efg',
  language: 'ko',
};
let union3: Union1 = {
  name: 'xyz',
  color: 'brown',
  language: 'en',
};
// let union4: Union1 = { // error case!
//   name: 'error!',
// };

// intersection type
let variable: number & string; // never type으로 추론

type Intersction = Dog & Person;
let intersection1: Intersction = {
  name: 'xxx',
  color: 'red',
  language: 'ko',
};
console.log(intersection1);

// 타입 추론
// best common type
let arr2 = [1, 'string'];

// 타입 단언
type Human = {
  name: string;
  age: number;
};

let human1 = {} as Human;
console.log(human1);
human1.name = 'jay';
human1.age = 33;
console.log(human1);
