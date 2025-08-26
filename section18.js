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
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: file, //bodyにBolbを指定した際はCentent-Typeは自動的に設定される。
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
