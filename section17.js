// setTimeout(() => {
//   // console.log(2);
// }, 1000); //第１引数に関数、第２引数に秒数を指定する。非同期的な動きをする。
// window.addEventListener('click', () => {
//   console.log(2);
// }); //非同期的な動きをする。
// // console.log(1);
// // window.addEventListener('click', (e) => {
// //   console.log(e);
// //   setTimeout(() => {
// //     console.log('setTimeout')
// //     navigator.geolocation.getCurrentPosition((position) => {
// //       console.log(position);
// //       setInterval(() => {
// //         console.log('setInterval')
// //       }, 1000)
// //     })
// //   }, 1000)
// // }) //コールバック地獄になる。
// try{
//   // setTimeout(() => {
//   // throw new Error('error');
//   // }, 1000);
//   navigator.geolocation.getCurrentPosition((position) => {
//        console.log(position);
// },(error) => {
//   console.log(error);
// });//第２引数にコールバック関数はC++のエラー文を返す。getCurrentPositionに限る。
// } catch (error) {
//   console.log(error);
// }//エラーを取得できない。トライ文から抜けた後に実行されるため取得ができない。
let promise =new Promise((resolve, reject) =>{
  resolve('error');//関数オブジェクトになる。変更は１度だけになる。
  // console.log('new promise');
}); //第１引数にコールバック関数を入れいないといけない。
promise = new Promise(() => {})//実行さしてもないも起きない。
promise =new Promise((resolve, reject) =>{
  // resolve(); //この場合は、thenとfinallyが実行される。
  setTimeout(() => {
    reject(new Error('error')); //この場合は、catchとfinallyが実行される。
  },1000); 
}); //resolve, rejectを使い回すには、非同期処理を使用する。
promise.then((value) => {
  console.log('then', value);
}, (error) => {
  console.log('then rejected', error.message);
}) //第２引数はcatchと同じコールバック関数になる。
promise.catch(() => {
  console.log('catch')
})
promise.finally(() => {
  console.log('finally')
})//何も値を返さない。
console.log(promise);
