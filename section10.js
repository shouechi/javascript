let fruits = ['apple', 'banana']; //オブジェクトの作成されている。インデックス、length、プロトタイプがある。
let arrayLinkeObject = {
  0: 'apple',
  1: 'banana',
  length: 2, 
};


fruits[2] = 'grape'; //lengthが自動的に更新される
fruits[10] = 'orange'; //疎な配列。処理が遅くなる。
delete fruits[10]; //lengthは削除されても更新されない、インデックスが大きい場合のみ更新される。
fruits.length = 2; //lenghthは減らした分は消える。

fruits = ['apple', 'banana', 'grape',,]; //疎の配列を定義することができる。
fruits = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];//多次元配列を定義することができる。
fruits = new Array('apple', 'banana', 'grape'); //new arrayで配列を作成することができる。疎の配列を作成することがでいない。
fruits = Array('apple', 'banana', 'grape'); ////Arrayで配列を作成することができる。
fruits = Array.of('apple', 'banana', 'grape'); //Array.ofで配列を作成することができる。１つだけ数字を入れても作成される。

fruits = ['apple', 'banana', 'grape'];
const newFruits = ['peach',...fruits, 'mango']; //スプレッド構文を使用して配列をコピーする
let sum = (...nums) => { //レストパラメーターを使用して配列を受け取る
  console.log(nums);
}
let nums = [1, 2, 3, 4, 5];
sum(...nums) //スプレッド構文を使用して配列を1ずつ展開する
fruits.push('orange'); //末尾に要素を追加する

const yoshipi = [
  'yoshipi', 
  20, 
  , 
  ['music', 'travel'], 
  {first: 'yoshipi', last: 'pi'},
  'tokyo',
  'hello!', 
];
let [
  ,
  ,
  gender= 'man',
  [music, travel],
  {first: firstName}, 
  //email ='test@test.com', 
  ...rest //最後に記載する
] = yoshipi; //分割代入を使用して配列の要素を変数に代入する,初期値を設定することもできる
console.log(gender, music, travel, firstName, rest );//restは残りの要素を配列で受け取る

let items = [0, 1, 2];
items.push(3,4); //末尾に要素を追加する,複数追加できる
items.pop(); //末尾の要素を削除する
items.unshift(-2,-1) //先頭に要素を追加する
items.shift(-2) //先頭の要素を削除する

arrayLinkeObject = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  length: 4,
};
Array.prototype.push.call(arrayLinkeObject, 3); //Arrayのメソッドをオブジェクトに適用する,length+1をしている
Array.prototype.pop.call(arrayLinkeObject); //Arrayのメソッドをオブジェクトに適用する,length-1をしている
Array.from(arrayLinkeObject); //Array.fromを使用してオブジェクトを配列に変換する

items = [0, 1, 2];
items.splice(1, 1, 1.1); //既存の配列を操作する。第一引数にインデックス、第二引数に削除する要素数を指定して要素を削除する、第３引数に削除した代わりに変更する。
items.tosplice(1, 0, 1.1); //tospliceは新しい配列を作成する。第一引数にインデックス、第二引数に削除する要素数を指定して要素を削除する、第３引数に削除した代わりに変更する。

items = [0, 1, 2, 3, 4];
items.fill(0); //配列の全ての要素を指定した値で埋める
items.fill(1, 2, 4) //第１引数で埋める値、第２引数で開始インデックス、第３引数で終了インデックスを指定して埋める

items = [0, 1, 2, 3, 4];
items.copyWithin(0, 2, 4)//配列の一部をコピーして、指定した位置に挿入する。第一引数にコピーしたいインデックス、第二引数にコピー元の開始インデックス、第三引数にコピー元の終了インデックスを指定する。

items = [0, 1, 2, 3, 4];
items.reverse(); //既存の配列を操作する。配列の要素を逆順に並べ替える
items.toreverse(); //toreverseは新しい配列を作成する。配列の要素を逆順に並べ替える

items = [10, 0, 1, 2,];
items.sort((a, b) => {
  return a - b; //昇順に並べ替える。aがbより小さい場合は負の値を返す。aがbより大きい場合は正の値を返す。等しい場合は0を返す。
}); //既存の配列を操作する。配列の要素を昇順に並べ替える
items.tosort((a, b) => {
  return a - b; //昇順に並べ替える。aがbより小さい場合は負の値を返す。aがbより大きい場合は正の値を返す。等しい場合は0を返す。
}); //toreverseは新しい配列を作成する。配列の要素を昇順に並べ替える

items = [0, 1, 2, 3, 4];
items.slice(2); //配列の一部を切り出して新しい配列を作成する。第一引数に開始インデックスを指定する。第二引数を省略すると最後まで切り出す。
console.log(items);

