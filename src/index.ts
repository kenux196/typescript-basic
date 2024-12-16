// function & type

// 함수의 리턴값은 자동 추론되므로 생략 가능.
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 9));

const add2 = (a: number, b: number): number => a + b;
console.log(add2(3, 19));

// default parameter
function introduce(name = 'kenux') {
  console.log(`name : ${name}`);
}

function introduce2(name = 'kenux', age?: number) {
  console.log(`name: ${name}`);
  if (typeof age === 'number') {
    console.log(`age: ${age}`);
  }
}
introduce2('kenux', 12);
introduce2('kenux2');

// optional parameter는 항상 반드시 뒤쪽으로 배치해야 한다.

// rest paramter
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
console.log(getSum(1, 2, 3, 4, 5, 6));

// function type expression
type Add = (a: number, b: number) => number;
const add3: Add = (a, b) => a + b;
// 함수 타입 표현식을 이용하면 함수 선언 및 구현 코드와 타입 선언을 분리할 수 있어 유용하다.
// 여러개의 함수가 동일한 타입을 갖는 경우 유용.
type Opreation = (a: number, b: number) => number;
const add4: Opreation = (a, b) => a + b;
const sub: Opreation = (a, b) => a - b;
const multiply: Opreation = (a, b) => a * b;
const divide: Opreation = (a, b) => a / b;

// Call Signature & hybrid type
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add10: Operation2 = (a, b) => a + b;
console.log(add10(100, 200));
// add10.name = 'kenux'; // error: name is readolny property.
console.log(add10.name); // add10 함수이름을 표시.

// 함수 타입의 호환성.
