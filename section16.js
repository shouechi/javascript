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