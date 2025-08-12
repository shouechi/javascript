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
promise = new Promise((resolve) => {
  let tmpPromise = new Promise((resolve2) => {
    setTimeout(() => {
      resolve2()
    }, 1000);
  });
  resolve(tmpPromise);//先に内側のpromiseが実行されてから、最後に外側が実行される。
})//実行さしてもないも起きない。
promise = new Promise(() => {});
// promise =new Promise((reject) =>{
//   // resolve(); //この場合は、thenとfinallyが実行される。
//   setTimeout(() => {
//     reject(new Error('error')); //この場合は、catchとfinallyが実行される。
//   },1000); 
// }); //resolve, rejectを使い回すには、非同期処理を使用する。
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
new Promise((resolve) => resolve(1))
  .then((value) => {
    console.log(value);
    return 2;//returnすること次にthenに移り、第１引数に入る。
  })
  .then((value) => {
    console.log(value);
    throw new Error(3); //throwの場合は次のcatchに移り、第１引数に入る。
  })
  .catch((error) => {
    console.log(error.message);
    throw new Error(4); //throwの場合は次のcatchに移り、第１引数に入る。
  }) //いくでもthen、catchを繋げることができる。
  .catch((error) => {
    console.log(error.message);
    return 5; //returnすること次にthenに移り、第１引数に入る。
  })
  .then((value) => {
    console.log(value);
    return 6; //次がcatchだった場合は、処理がスキップされる。
  })
  .catch(() => console.log('skip'))
  .then((value) => {
    console.log(value);//ruturnでの６が第一引数に入る。
    throw new Error(7);
  })//returnの場合はthenを探して、引数を渡す。
  .then(() => console.log('skip'))
  .catch((error) => {
    console.log(error.message);
    return 8;
  })//throwの場合はcatchを探して、引数を渡す。最後まで探してcatchがない場合はエラーが出る。
  .catch(() => console.log('skip'))
  .finally((value) => {
    console.log('finally value: ', value)//第１引数には何も入らない。thenを探す。
    return new Promise((resolve) => {//この場合は、1秒待ってから8が表示される。
      setTimeout(() => {
        resolve();
      }, 1000)
    })
  })
  .then((value) => {
    console(value);
  })
  .finally(() => {
    throw new Error(9); //この場合はcatch探しが始まる。
  })
  .catch((error) => {
    console.log(error.messsage);
  })
console.log(promise);

