const button = document.querySelector('button')
// button.onclick = () => {
//   alert('cliked');
// }; //onclick関数が実行時に中の関数が実行される。
button.addEventListener('click', () => {
  console.log('clicked! from addEventListener');
}); //第一引数にイベント。第２引数に対応する関数。
const clickListener = () => {
  console.log('clicked again! addEventListener');
}
button.addEventListener('click', clickListener);
button.onclick = () => {
   console.log('clicked again!');
}; //先に処理される。
button.removeEventListener('click', clickListener); //addEventListenerを削除する。
button.addEventListener('click', clickListener, {
  once: true,
}); //onceをtrueにすることでclickListenerを使い捨てのように一度だけイベントを実行。
button.addEventListener('click', (event) => {
  console.log(event);
}); //パラメーターを置くことで取得することができる。
button.addEventListener('click', function (a, b, event) {
  console.log(this, a ,b ,event);
}.bind({}, 'a', 'b')); //thisはイベントの要素を指すのでbuttonになる。引数を固定する時はbindを使用する。
button.onclick = function (event) {
  console.log(this);
}; //onclickの場合もaddEventListenerと同じになる。
const input = document.querySelector('input');
input.addEventListener('input', () => {
  console.log('input from input in the bubbling phase')
}); //文字を入力するごとに表示される。
document.addEventListener('input', () => {
  console.log('input from document in the bubbling phase')
});
document.body.addEventListener('input', () => {
  console.log('input from boby in the bubbling phase')
});
window.addEventListener('input', () => {
  console.log('input from window in the bubbling phase')
});//inputから順番にイベントが実行される。(バブリング)
// window.addEventListener('keydown', () => {
//   console.log('input from input')
// }); //キーが当たっているところを表示する。(inputでなく、bodyに合っている場合)
const inputHanlder = () => {
  console.log('input from input in the chature phase')
}
input.addEventListener('input', inputHanlder
, {capture: true}); //captureから先に実行される。
input.removeEventListener('input', inputHanlder, {capture: true}); //inputHanlderを削除する。
document.addEventListener('input', () => {
  console.log('input from document in the chature phase')
});
document.body.addEventListener('input', () => {
  console.log('input from boby in the chature phase')
});
window.addEventListener('input', () => {
  console.log('input from window in the chature phase')
});
