fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', //HTTPメソッドを指定。bodyに値がある場合はGET,HEAD以外を指定する。
  headers: {
  //   Accept: 'text/plain',
    'Content-Type': 'text/plain;charset=utf-8', //リクエストする際はMMEIタイプを指定する。
  },
  body: 'hello', //UTF8がバイナリーデータとして送信される。
  // body: new ArrayBuffer(10), //バイナリーデータを直接bodyに指定できる。
}); //fetchを呼び出すとすぐリクエストを送信する。第２引数でオブジェクトを指定してオプションを設定できる。
let json = '[{"name": "Tom", "age": 29}]'; //JSONは文字列はダブルクォートで囲む。
let result = JSON.parse(json); //praseはオブジェクトに変換する。
JSON.stringify(result); //stirngifyはJSONに変換する。
let input = document.querySelector('input');
input.addEventListener('change',() => {
  let file = input.files[0];
  let fromData = new FormData();
  fromData.append('user', 'yoshipi') //第１引数にcontent-typeのname、第２引数に実際に入れる値を指定できる。
  fromData.append('password', 'fjaifajif')
  fromData.has('user') //引数に値があるのか確認する。
  fromData.get('user') //引数の値を取得する。
  fromData.get('blob') //引数の値をファイルオブジェクトで取得する。
  fromData.delete('password') //引数の値を削除する。
  fromData.set('profile', file) //引数の値を上書きする。
  let form = document.querySelector('form');
  fromData = new FormData(form); //引数にformを指定することで初期値として設定できる。

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: fromData, //bodyにBolbを指定した際はCentent-Typeは自動的に設定される。
  });
  let objectURL = URL.createObjectURL(file); //引数にBlobを指定する。
  let img = document.querySelector('img');
  img.src = objectURL;
  img.addEventListener('load', () => {
    URL.revokeObjectURL(objectURL); //画面を更新した際に画像URLを削除する。
  })
  console.log(file);
})
new Blob([new ArrayBuffer(), 'hello', new Blob()], {
  type: 'application/octet-stream',
}); //Blobはバイナリーデータを扱うオブジェクト。複数のデータをまとめることができる。
new TextDecoder().decode(new ArrayBuffer(16)); //ArrayBufferのデータをUTF-8の文字列として返す。
new TextEncoder().encode('hello'); //UTF-8の文字列をYouint8Arrayとして返す。
(async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts') //awaitの時点でhederまで取得できている。
  // result = await response.arrayBuffer(); //bodyのデータを取得する。
  // result = await response.blob(); //bodyのblobデータを取得する。
  // result = await response.text(); //UTF-8の文字列を取得する。
  result = await response.json(); //JSONをオブジェクトに変換して取得する。
  // result = await response.formData(); //formDataを取得する。
  result = response.bodyUsed; //bodyが使用されたかどうかを取得する。

})();