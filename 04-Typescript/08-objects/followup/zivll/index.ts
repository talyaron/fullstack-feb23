const ziv = {
  userName: `Ziv`,
  age: 32,
  password: 1234,
  profileImage: `....`,
};

const nave = {
  userName: `Nave`,
  age: 32,
  password: 1234,
  profileImage: `....`,
};

console.log(ziv, nave);
console.log(
  ziv.userName,
  `password:`,
  ziv.password,
  nave.userName,
  `password:`,
  nave.password
);
let allUserNames: string | never | null = [];
allUserNames = prompt("username");
console.log();
