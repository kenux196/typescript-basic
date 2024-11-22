import User from './user/user';

console.log('Hello, Typescript~~~');

const user: User = new User('kenux', 47);

console.log(`${user.getName()}의 나이는 ${user.getAge()} 입니다.`);
