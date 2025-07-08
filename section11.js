alert('hello'); // alertはブラウザのダイアログを表示する。デバック用に使用されることが多い
confirm('are you sure?'); // confirmはブラウザのダイアログを表示して、OKかキャンセルかを選択させる。デバック用に使用されることが多い
prompt('name?', 'yoshipi'); // promptはブラウザのダイアログを表示して、入力を受け付ける。第２引数には初期値を設定できる。デバック用に使用されることが多い
let url =new URL('https://developer.mozilla.org/en-US'); // URLオブジェクトを作成する。URLの解析や操作に使用される。ブラウザのAPIで使用されることが多い
url = new URL ('en-US', 'https://developer.mozilla.org'); //第１引数にパス。第２引数に先頭のURLを指定して、相対URLを絶対URLに変換する。
url.pathname = 'en-Us/serch'; //pathnameプロパティを変更する。URLのパスを変更する。
url.search = '?q=javascript'; //searchプロパティを変更する。
let result = url.searchParams.get('q'); //searchParamsプロパティを使用して、URLのクエリパラメータを取得する。getメソッドを使用して、指定したキーの値を取得する。
result = url.searchParams.set('page', '2') //setメソッドを使用して、指定したキーの値を設定する。キーが存在しない場合は新しく追加される。既存のキーがある場合は上書きされる。
result = url.searchParams.has('page'); //hasメソッドを使用して、指定したキーが存在するかどうかを確認する。存在する場合はtrue、存在しない場合はfalseを返す。
result = url.searchParams.delete('page'); //deleteメソッドを使用して、指定したキーを削除する。キーが存在しない場合は何も起こらない。
console.log(result);