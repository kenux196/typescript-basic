import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ko';

import User from './user/user';

console.log('Hello, Typescript~~~');

const user: User = new User('kenux', 47);

console.log(`${user.getName()}의 나이는 ${user.getAge()} 입니다.`);

console.log('=====================================================');

const today = dayjs();
console.log('🚀 ~ today:', today);
console.log('🚀 ~ today:', today.toISOString());

dayjs.extend(utc);

// default local time
console.log(dayjs().format());

// utc mode
console.log(`dayjs mode: ${dayjs.utc().isUTC() ? 'UTC Mode' : 'Local Mode'}`);
console.log(dayjs.utc().format());
console.log(dayjs.utc().local().format());

// convert local time to UTC time
console.log(dayjs().utc().format());

console.log(`before dayjs locale: ${dayjs.locale()}`);
dayjs.locale('ko');
console.log(`current dayjs locale: ${dayjs.locale()}`);
console.log(dayjs().toString());
console.log(dayjs().locale('ko').toString());

// dayjs.extend(localeData);
// console.log(dayjs.months());
// console.log(dayjs().localeData().months());
