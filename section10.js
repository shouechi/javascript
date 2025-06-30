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

