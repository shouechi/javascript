// const obj = {
//   a: 1,
//   b: 2,
// };
// // obj.__proto__ = {
// //   c: 3,
// // }
// Object.setPrototypeOf(obj, {
//   c: 3,
// }); //obj.__proto__と同じようになる。
const obj = Object.create({ c: 3 }); //prototypeの設定とオブジェクトの作成を同時に行う。
obj.a = 1;
obj.b = 3;
// obj.__proto__ = 'hello' //__proto__はnullかオブジェクト以外を入れた場合は無視される。
// console.log(Object.getPrototypeOf(obj)); //prototypeオブジェクトを見ることができる。
for (const key in obj) {
  // console.log(key)
} //forinループはprototypeまで遡ってループする。
console.log(Object.keys(obj)); //prototypeまでは見ない。Objectではportotype見ない。
for (const key of Object.keys(obj)) {
  // console.log(key);
} //forofとObject.keysを組み合わせたものを使用するのが一般的。protoまでは必要ないため。
// const user1 = {
//   name:'Yoshipi',
//   age:30,
//   greeting() {},
// };

// const user2 = {
//   name:'Tom',
//   age:31,
//   greeting() {},
// };

// const user3 = {
//   name:'Mary',
//   age:32,
//   greeting() {},
// };

const userPrototype = {
  greeting() {
    return `Hi! This is ${this.name}. I am ${this.age} years old.`;
  },
}; //prototypeオブジェクトを定義する
const UserFactory = (name, age) => {
  const user = Object.create(userPrototype);
  user.name = name;
  user.age = age; //ファクトリ関数
  return user; //オブジェクトを返す
}; //calssはパスカルケース
// const user1 = UserFactory('Yoshipi', 30);
// const user2 = UserFactory('Tom', 31);
// const user3 = UserFactory('Mary', 32);
const UserConstructor = function (name, age) {
  //this = {}が定義される
  if (new.target === undefined) return new UserConstructor(name, age); //プロパティ名になる。関数のなかで定義する必要がある。アロー関数では使用できなくなる
  this.name = name;
  this.age = age;
  return 'hello'; //オブジェクト以外は無視される。)
  //return this;で返している
};
UserConstructor.prototype.greeting = function () {
  return `Hi! This is ${this.name}. I am ${this.age} years old.`;
}; //
// const user1 = new UserConstructor('Yoshipi', 30); //newを使用した場合はコンストラクタ関数
const user2 = new UserConstructor('Tom', 31); //オブジェクトからインスタンスを生成する
const user3 = new UserConstructor('Mary', 32);
// console.log (user1);
// console.log (user2);
// console.log (user3);
// const o = new Object({hi: 'hi'}); //オブジェクト作成するコンストラクタ関数
o = {
  a: 1,
}; // {}はObjectと同じ意味になる。基本はこっちでオブジェクトを作成
// console.log(o.hasOwnProperty('a')); //hasOwnPropertyはオブジェクトがそのプロパティを持っているかどうかを確認する,prototypeまで確認しない
// console.log(Object.prototype.hasOwnProperty.call(o, 'a')); //o.hasOwnProperty('a')と同じ意味になる
// console.log(Object.hasOwn(o, 'a')); //Object.prototype.hasOwnProperty.call(o, 'a')と同じ意味になる
// console.log('hi' in o); // in演算子はオブジェクトがそのプロパティを持っているかどうかを確認する,prototypeまで確認する

class User {
  id = 120; //クラスフィールドが先に上から順にthisに読み込まれる。数字でも文字列でもいい。get,setは使用できない。
  birthday = "1990/01/01";
  #age =0; //プライベートフィールドは#をつける。クラスの外からはアクセスできない。
  constructor(name, age) {
    this.name = name;
    this.#age = age; //コンストラクタ関数
  }
  greeting() {}
  post() {}
} //classを使用した関数object,省略記法のメソッドを羅列できる
const user1 = new User('Yoshipi', 30); //newで呼びした時にconstructor関数が先に実行される

class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {}
}
class Bird  extends Animal { //継承を使用してAnimalクラスを拡張する, 関数objectも継承できる
  name = 'bird';
  constructor(age, name) {
    super(age); //super()を使用して親クラスのコンストラクタを呼び出す,superの前にthis,returnを使用できない
    this.name = name;
  }
  fly() {}
}
const bird = new Bird(3, 'pi');
console.log(bird); 
