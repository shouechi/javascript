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
