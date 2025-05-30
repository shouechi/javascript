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
obj.a =1
obj.b =3
// obj.__proto__ = 'hello' //__proto__はnullかオブジェクト以外を入れた場合は無視される。
// console.log(Object.getPrototypeOf(obj)); //prototypeオブジェクトを見ることができる。
for (const key in obj) {
  console.log(key)
} //forinループはprototypeまで遡ってループする。
console.log(Object.keys(obj)); //prototypeまでは見ない。Objectではportotype見ない。
for (const key of Object.keys(obj)) {
  console.log(key);
} //forofとObject.keysを組み合わせたものを使用するのが一般的。protoまでは必要ないため。