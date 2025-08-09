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
let captureEvent;
let targetEvent;
let bubblingEvent;
input.addEventListener('input', (event) => {
  console.log(event.currentTarget)
  targetEvent = event;
  console.log('input from input in the bubbling phase')
}); //文字を入力するごとに表示される。
document.addEventListener('input', () => {
  console.log('input from document in the bubbling phase')
});
document.body.addEventListener('input', () => {
  console.log('input from boby in the bubbling phase')
});
window.addEventListener('input', (event) => {
  event.stopImmediatePropagation(); //それ以降の処理はしない。同じ要素があっても処理しない。
  console.log(event.currentTarget)
  bubblingEvent =  event;
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
window.addEventListener('input', (event) => {
  event.stopPropagation(); //それ以降の処理はしない。同じ要素は処理される。
  console.log(event.currentTarget)
  captureEvent = event;
  console.log('input from window in the chature phase')
});//event.currentTargetはthisと同じ動きをする。
const aEl = document.querySelector('a');
// aEl.addEventListener('click', (event) => {
//   event.preventDefault();
// }) //preventDefaultでaタグを無効にすることができる。
// window.addEventListener('click', (event) => {
//   console.log(event.defaultPrevented); //preventDefaultがtrueかfalseを確認する。
//   alert('window');
// }) 
// aEl.onclick = () => false; //preventDefault動きにある。on系の場合のみ使用できる。
// document.documentElement.style.height = '1500px'
// window.addEventListener('wheel', (event) => {
//   for (let i = 0; i < 1e9; i++);
//   console.log(event);
// }, { passive: true}); //paassiveをtrueにすることで重たい処理を滑らかに処理することができる。
document.addEventListener('my-event', (event) => {
  console.log(event)
})
window.addEventListener('my-event', (event) => {
  console.log(event)
}, true) //キャプチャリングはできる。
window.addEventListener('my-event', (event) => {
  console.log(event)
})
const myEvent = new Event('my-event', {
  bubbles: true,
  cancelable: true,
}); //イベントを独自で作成できる。bubblesをtrueにすることでバブリングができる。
document.dispatchEvent(myEvent); //イベントを発生させることができる。
