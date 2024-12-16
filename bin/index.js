"use strict";
// Enum type
// typescript only
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
console.log(Role);
const user11 = {
    name: 'admin',
    role: Role.ADMIN,
};
console.log(user11);
const user12 = {
    name: 'user12',
    role: Role.USER,
};
console.log(user12);
