localStorage.setItem('name', 'John');//ブラウザに保存される。文字列しか保存できない。
let result = localStorage.getItem('name'); //保存されている値を取得できる。別のタブからでも同じ値が取得できる。
localStorage.removeItem('name'); //保存されている値を削除する。
localStorage.clear(); //すべての保存されている値を削除する。
sessionStorage.setItem('name', 'John'); //sessionStorageに保存される。ブラウザを閉じたら削除される。
sessionStorage.removeItem('name');
result = sessionStorage.getItem('name');
sessionStorage.clear();
window.addEventListener('storage', (event) => {
  console.log('storage event', event);
}); //storageイベントを使用することで、他のタブで変更された際に検知できる。