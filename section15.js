let result = document.documentElement; //HTML全体を取得する。
result = document.head; //head要素を取得する。
result = document.body; //body要素を取得する。
result = document.body.childNodes //body要素の子要素を取得する。
result = document.body.firstChild; //body要素の最初の子要素を取得する。
result = document.body.lastChild; //body要素の最後の子要素を取得する。
result = document.body.parentNode; //body要素の親要素を取得する。
result = document.body.nextSibling; //body要素の次の兄弟要素を取得する。
result = document.body.previousSibling; //body要素の前の兄弟要素を取得する。
result = document.body.children; //body要素の子要素を取得する。
result = document.body.firstElementChild; //body要素の最初の子要素を取得する。
result = document.body.lastElementChild; //body要素の最後の子要素を取得する。
result = document.body.parentElement; //body要素の親要素を取得する。
result = document.body.nextElementSibling; //body要素の次の兄弟要素を取得する。
result = document.body.previousElementSibling; //body要素の前の兄弟要素を取得する。
result = document.querySelector('#title'); //IDがtitleの要素を取得する。 １つしか取得できない。上から順に取得される。
result = document.querySelector('p'); //直接タグを指定して取得もできる。１つしか取得できない。上から順に取得される。
result = document.querySelectorAll('p'); //全てのp要素を取得する。
result = document.body.closest('html') //body要素の最も近い親要素を取得する。指定したセレクタに一致する最も近い祖先要素を返す。セレクタが一致しない場合はnullを返す。
result = document.body.matches('body'); //body要素が指定したセレクタに一致するかどうかを確認する。trueまたはfalseを返す。
result = document.contains(document.body); //documentがbody要素を含んでいるかどうかを確認する。trueまたはfalseを返す。
result = document.getElementById('title'); //IDがtitleの要素を取得する。getElementByIdは一意のIDを持つ要素を取得するために使用される。IDはページ内で一意である必要がある。
result = document.getElementsByClassName('apple'); //指定したクラス名を持つ要素を全て取得する。getElementsByClassNameは指定したクラス名を持つ全ての要素を取得するために使用される。
result = document.links; //ページ内の全てのリンクを取得する。hre属性がないと取得できない。
result = document.images; //ページ内の全ての画像を取得する。img要素を取得する。
result = document.forms; //ページ内の全てのフォームを取得する。form要素を取得する。
result = document.scripts; //ページ内の全てのスクリプトを取得する。script要素を取得する。
result = document.body.innerHTML; //body要素の内部HTMLを取得する。innerHTMLは要素の内部のHTMLを文字列として返す。
document.body.innerHTML = '<h1>Hello!</h1> <div>I am Tom</div>'; //body要素の内部HTMLを変更する。innerHTMLは要素の内部のHTMLを文字列として設定する。既存の内容は上書きされる。
document.querySelector('div').innerHTML = '<h2>I am Yoshipi</h2>'; //div要素の内部HTMLを変更する。querySelectorを使用して、最初のdiv要素を取得し、その内部HTMLを変更する。
document.querySelector('h1').innerHTML =  'Hi!'; //h1要素の内部HTMLを変更する。querySelectorを使用して、最初のh1要素を取得し、その内部HTMLを変更する。
// document.querySelector('div').innerHTML += `<p>I am 30 year old.</p>`; //body要素の内部HTMLに新しい要素を追加する。+=演算子を使用して、既存の内容に新しい内容を追加する。
document
  .querySelector('div')
  .insertAdjacentHTML("beforeend",'<p>I am 30 year old.</p>') //insertAdjacentHTMLを使用して、指定した位置に新しいHTMLを挿入する。'beforeend'は要素の最後に挿入することを意味する。
// let UserInput = '初めての投稿！'
// document.body.innerHTML = UserInput;
// UserInput = '初めての投稿! <script>alert(`XSS攻撃`)</script>';
// document.body.innerHTML = UserInput; //XSS攻撃の例。ユーザー入力をそのままHTMLに挿入すると、悪意のあるスクリプトが実行される可能性がある。
// // UserInput = '初めての投稿!<img src="" onerror="alert(`XSS攻撃`)">'; //画像の読み込みエラーを利用したXSS攻撃の例。画像が読み込まれない場合にスクリプトが実行される。';
// document.body.innerHTML = UserInput; 
// const username = new URL(location.href).searchParams.get('username');
// document.body.innerHTML=username; //URLのクエリパラメータからusernameを取得する。location.hrefは現在のURLを取得する。searchParamsはURLのクエリパラメータを操作するためのオブジェクト。
document.body.innerHTML = '<h1>Hello!</h1> <div>I am Tom</div> How are you?';
result = document.body.textContent; //タグを除いたテキストコンテントだけを取得する。
result = document.body.childNodes[3].textContent;
result = document.textContent; //nullを返す。
document.body.textContent = 'Hello!'; //body要素のテキストコンテントを変更する。textContentは要素のテキストコンテントを文字列として設定する。既存の内容は上書きされる。XSS対策ができる。
document.body.innerHTML = '<h1>Hello!</h1> <div>I am Tom</div> How are you?';
result = document.body.childNodes;
document.body.childNodes[3].textContent = 'hello'; //body要素の子要素のコンテキストを変更する。
let p = document.createElement('p'); //新しいp要素を作成する。createElementは指定したタグ名の新しい要素を作成するために使用される。
let text = document.createTextNode('text'); //新しいテキストノードを作成する。
document.body.innerHTML = '<div>I am Tom<div>';
p.innerHTML = 'hello';
p.textContent = 'hello';
p.append(text);
// document.querySelector('div').append(p); //div要素の最後に新しいp要素を追加する。複数の要素を追加することもできる。
// document.querySelector('div').prepend(p); //div要素の最初に新しいp要素を追加する。
// document.querySelector('div').before(p); //div要素の前に新しいp要素を追加する。
// document.querySelector('div').after(p); //div要素の後に新しいp要素を追加する。
document.querySelector('div').append('This is a text.'); //div要素の最後にテキストを追加する。
document.querySelector('div').append('<p></p>'); //xss攻撃対策もできる。


console.log(result);
