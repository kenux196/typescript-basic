import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ko';

import User from './user/user';
import DayjsUtils from './dayjs-utils/dayjs-utils';

console.log('Hello, Typescript~~~');

const user: User = new User('kenux', 47);

console.log(`${user.getName()}의 나이는 ${user.getAge()} 입니다.`);

console.log('=====================================================');

// const dayjsUtils = new DayjsUtils();
// dayjsUtils.sample();

const message = 'Hello, World!';
console.log(message.toLowerCase());

const member = {
  id: 1,
  name: 'kenux',
};

// member.location;

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet('kenux', new Date());

const kenux = new User('kenux', 47);
console.log(`${kenux.getName()}, ${kenux.getAge()}`);
console.log(typeof kenux);
