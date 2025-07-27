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

p = document.createElement('p');
p.textContent = 'hello';
document.body.innerHTML = '<div>I am Tom</div>'
document.querySelector('div').append(p);
let p2 = p.cloneNode(true); //pとは別のノードを作成する。子孫ノードまでコピーしたい場合はtrue。
document.querySelector('div').prepend(p2);
p.remove(); //DOMツリーから削除する。
p2.replaceWith(document.createElement('p'), text, 'apple', '<p>banana</p>'); //XSS対策もされている。
result = document.nodeType;
document.body.id = 'foo' //セッターとしてもできる
result = document.body.id; //idは要素のidを初期値として取得している。
document.body.innerHTML = '<input type="text"/>';
result = document.querySelector('input').type;
document.querySelector('input').type = 'checkbox'; //変更もできる
result = document.body.className; //classを取得する。
result = document.body.classList; //DOMトークンリストとして取得する。
document.body.attributes.id.value = '26';
result = document.body.attributes;
result = document.body.id;
document.body.id = '17'; //基本的にはattributesの中にある値とプロパティはお互いに影響している。
result = document.body.getAttribute('id');
document.body.setAttribute('newattr', 'newattr'); //第一引数に属性、第二引数に値を設定するとattributesに新しい属性が追加される。既存の属性も変更可能。
result = document.body.hasAttribute('id') //引数の属性があるか確認する。
result = document.body.removeAttribute('id'); //属性を削除する。
result = document.body.dataset.myattr;
document.body.innerHTML = 'hello';
result = document.styleSheets
// document.styleSheets[0].cssRules[0].style.color = 'red'; //cssRulesのstyleを指定することで変更することができる。
document.body.innerHTML = '<p hidden style="color: white; background-color"class="text-green bg-yellow">hello</p>'
result = document.querySelector('p').className;
document.querySelector('p').className = 'text-red bg-blue'; //stylecssを変更可能
result =document.querySelector('p').classList;
result =document.querySelector('p').classList.remove('bg-blue', 'text-red'); //classを削除できる。引数も複数可能。
result =document.querySelector('p').classList.add('bg-blue', 'text-red'); //classに追加される。引数も複数可能。
result =document.querySelector('p').classList.toggle('bg-blue'); //引数のclassがあったら削除、なかったら追加する。
result = document.querySelector('p').style;
document.querySelector('p').style.color = 'yellow'; //pタグの色を変更する。
document.querySelector('p').style.backgroundColor = 'pink'; //バックグランドカラーを変更する。
document.querySelector('p').style.width = '300px'; //幅を変更する。指定する際は文字列で指定する。
document.querySelector('p').style.width = ''; //空文字にすることで削除できる。
document.querySelector('p').style.display = 'none'; //非表示になる。
document.querySelector('p').style.display = ''; //表示される。
document.querySelector('p').hidden = true; //非表示になる。
document.querySelector('p').hidden = false; //表示にされる。
result = document.querySelector('p').setAttribute('style', 'color: white; background-color: skyblue'); //setAttribeteでstyleを指定するこで変更できる。
result = document.querySelector('p').style.cssText;
document.querySelector('p').style.cssText = 'color: yellow; background-color: black'; //setAttribeteと同じことができる。
document.body.innerHTML = `<div class="box">
<h2>Hello!</h2>
<h2>I am Yoshipi</h2>
<h2>How are you?</h2>
</div><p style="margin: 100px 0">this is p</p>`
document.querySelector('div').getBoundingClientRect();
const messageEl = document.createElement('p');
messageEl.textContent = 'message!';
document.body.append(messageEl);
messageEl.style.position = 'absolute';
messageEl.style.top = `${document.querySelector('div').getBoundingClientRect().bottom}px`; //divタグと同じ底の高さになる。
messageEl.style.left = `${document.querySelector('div').getBoundingClientRect().left}px`; //divタグの左に配置される。
result = document.elementFromPoint(300, 300); //座礁から要素を取得することができる。
result = document.querySelector('div').clientWidth //ボーダーを含まない内側の幅。
result = document.querySelector('div').clientHeight //ボーダーを含まない内側の高さ。
result = document.querySelector('div').clientLeft //左側のボーダーの幅。
result = document.querySelector('div').clientTop //上のボーダーの幅。
result = document.querySelector('div').scrollHeight //全ての高さを取得できる。ボーダーは含まない。
result = document.querySelector('div').scrollWidth //全ての幅を取得できる。ボーダーは含まない。
document.documentElement.style.border = '25px solid black';
document.body.style.border = '25px solid orange';
result = document.documentElement.getBoundingClientRect().height; //一番上から下までの高さを取得できる。
result = document.documentElement.clientHeight; //画面領域の高さを返す。





console.log(result);
