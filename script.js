let resultSpan = document.getElementById('resultSpan');
let errorMessage = document.getElementById('errorMessage');
let errorTitle = document.getElementById('errorTitle');
let errorContent = document.getElementById('errorContent');
let userRankSelect = document.getElementById('userRankSelect');

function get_number(btn){
  let resultValue = document.getElementById('resultValue');
  let resultValueElement = parseInt(resultValue.value);
  let userRankValue = userRankSelect.value;
  let result = 50 - resultValueElement / userRankValue;
  if(result < 0){
    result = 0;
  }
  if(btn.value == '計算'){
    if(Number.isInteger(result)){
      resultSpan.innerText = result;
      errorMessage.style.display = 'none';
    }else{
      errorMessage.style.display = 'block';
      errorTitle.innerText = 'エラー：マイル入力数の誤り';
      errorContent.innerText = `　数値が${userRankValue}で割り切れない、もしくは整数ではない可能性があります。マイル数を正しく入力し直して下さい。`;　
      resultSpan.innerText = '-';
    }
  }else{
    if(btn.value == '⇦'){
      if(resultValue.value != ""){
        resultValue.value = resultValue.value.slice(0, -1);
      }
    }else{
      resultValue.value += btn.value;
    }
  }
}
