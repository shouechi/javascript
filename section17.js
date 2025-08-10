setTimeout(() => {
  // console.log(2);
}, 1000); //第１引数に関数、第２引数に秒数を指定する。非同期的な動きをする。
window.addEventListener('click', () => {
  console.log(2);
}); //非同期的な動きをする。
// console.log(1);
// window.addEventListener('click', (e) => {
//   console.log(e);
//   setTimeout(() => {
//     console.log('setTimeout')
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       setInterval(() => {
//         console.log('setInterval')
//       }, 1000)
//     })
//   }, 1000)
// }) //コールバック地獄になる。
try{
  // setTimeout(() => {
  // throw new Error('error');
  // }, 1000);
  navigator.geolocation.getCurrentPosition((position) => {
       console.log(position);
},(error) => {
  console.log(error);
});//第２引数にコールバック関数はC++のエラー文を返す。getCurrentPositionに限る。
} catch (error) {
  console.log(error);
}//エラーを取得できない。トライ文から抜けた後に実行されるため取得ができない。

