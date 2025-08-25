fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', //HTTPメソッドを指定。bodyに値がある場合はGET,HEAD以外を指定する。
  headers: {
  //   Accept: 'text/plain',
    'Content-Type': 'text/plain;charset=utf-8', //リクエストする際はMMEIタイプを指定する。
  },
  body: 'hello' //UTF8がバイナリーデータとして送信される。
  // body: new ArrayBuffer(10), //バイナリーデータを直接bodyに指定できる。
}); //fetchを呼び出すとすぐリクエストを送信する。第２引数でオブジェクトを指定してオプションを設定できる。