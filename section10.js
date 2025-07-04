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
items.toSpliced(1, 0, 1.1); //tospliceは新しい配列を作成する。第一引数にインデックス、第二引数に削除する要素数を指定して要素を削除する、第３引数に削除した代わりに変更する。

items = [0, 1, 2, 3, 4];
items.fill(0); //配列の全ての要素を指定した値で埋める
items.fill(1, 2, 4) //第１引数で埋める値、第２引数で開始インデックス、第３引数で終了インデックスを指定して埋める

items = [0, 1, 2, 3, 4];
items.copyWithin(0, 2, 4)//配列の一部をコピーして、指定した位置に挿入する。第一引数にコピーしたいインデックス、第二引数にコピー元の開始インデックス、第三引数にコピー元の終了インデックスを指定する。

items = [0, 1, 2, 3, 4];
items.reverse(); //既存の配列を操作する。配列の要素を逆順に並べ替える
items.toReversed(); //toreverseは新しい配列を作成する。配列の要素を逆順に並べ替える

items = [10, 0, 1, 2,];
items.sort((a, b) => {
  return a - b; //昇順に並べ替える。aがbより小さい場合は負の値を返す。aがbより大きい場合は正の値を返す。等しい場合は0を返す。
}); //既存の配列を操作する。配列の要素を昇順に並べ替える
items.toSorted((a, b) => {
  return a - b; //昇順に並べ替える。aがbより小さい場合は負の値を返す。aがbより大きい場合は正の値を返す。等しい場合は0を返す。
}); //toreverseは新しい配列を作成する。配列の要素を昇順に並べ替える

items = [0, 1, 2, 3, 4];
items.slice(2); //配列の一部を切り出して新しい配列を作成する。第一引数に開始インデックスを指定する。第二引数を省略すると最後まで切り出す。

items = [0, 1, 2];
result = items.concat([3, 4, 5]);//配列を結合して新しい配列を作成する。concatメソッドは元の配列を変更しない。
console.log(result);

items = ['a', 'b', 'c'];
result = items.join('-'); //配列の要素を指定した区切り文字で結合して文字列を作成する。joinメソッドは元の配列を変更しない。

items = ['apple', 'banana', 'grape', 'banana'];
result =items.indexOf('banana'); //配列の中から指定した要素の最初のインデックスを返す。見つからない場合は-1を返す。
result = items.lastIndexOf('banana'); //配列の中から指定した要素の最後のインデックスを返す。見つからない場合は-1を返す。
result = items.includes('banana'); //配列の中に指定した要素が含まれているかどうかを返す。含まれている場合はtrue、含まれていない場合はfalseを返す。

items = [0, 1, 2];
result = items.map((item, index, array) => {
  return item * 10;
}) //配列の各要素に対して指定した関数を実行し、新しい配列を作成する。mapメソッドは元の配列を変更しない。

items = [0, 1, 2];
result = items.flat(); //配列をフラットにして新しい配列を作成する。第一引数にフラットにする深さを指定する。
result = items.flatMap((item) => [item, item * 10]); //配列をフラットにして新しい配列を作成する。デフォルトは1。


items = [0, 1, 2, 3, 4, 5, 6];
result = items.filter((item) => {
  return item > 3;
}) //配列の各要素に対して指定した関数を実行し、条件を満たす要素だけを含む新しい配列を作成する

items = [1, 2, 3];
result = items.reduce((previousItem, item) => {
  return previousItem + item; //配列の端から順に計算して１つの値を返す。
}, 0); //第二引数に初期値を指定することができる。

items = ['apple', 'banana', 'grape', 'banana'];
result = items.find((item) => {
  return item === 'banana'; //配列の中から条件を満たす最初の要素を返す。見つからない場合はundefinedを返す。
});

items = [1, 2, 3]; 
result = items.some((item) => { //someメソッドは配列の中に条件を満たす要素が1つでもあるかどうかを確認する。
  return item > 2; 
});
result = items.every((item) => {
  return item < 5; //配列の全ての要素が条件を満たすかどうかを返す。全て満たす場合はtrue、1つでも満たさない場合はfalseを返す。
});
console.log(result);

items = ['apple', 'banana', 'grape', 'banana'];
items.forEach((item) => {
  return item; //ただ配列の中がループされるだけで、何も返さない。
});

items = ['apple', 'banana', 'grape'];
items.at(-1)//配列の指定したインデックスの要素を返す。負の値を指定すると、末尾から数えたインデックスを返す。
items.with(-2, 'orange') //配列の指定したインデックスの要素を新しい値に置き換えた新しい配列を返す。負の値を指定すると、末尾から数えたインデックスを返す。

items = [0, 1, 2, 3, 4, 5];
 const Obj = Object.groupBy(items, (item)=> {
  if (item % 2 === 0){
    return 'even'; //偶数のグループを作成する
  }
  return 'odd'; //奇数のグループを作成する
});
console.log(Obj);

