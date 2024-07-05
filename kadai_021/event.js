

//btnというidを持つHTML要素を取得し、定数に代入する
const btn =document.getElementById('btn');

//HTML要素がクリックされた時にイベント処理を執行する
btn.addEventListener('click',()=>{

 //2秒(2000ミリ秒)の待ち時間を設定し、非同期処理を実行する
setTimeout(()=>{
  //textというidを持つHTML要素w取得し、定数に代入する
const text =document.getElementById('text');

  text.textContent='ボタンをクリックしました';
},2000);
});