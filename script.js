let resultSpan = document.getElementById('resultSpan');

function get_number(btn){
  let resultValue = document.getElementById('resultValue');
  let resultValueElement = parseInt(resultValue.value);
  let result = 50 - resultValueElement / 60;
  if(result < 0){
    result = 0;
  }
  if(btn.value == '計算'){
    if(Number.isInteger(result)){
      resultSpan.innerText = result;
    }else{
      console.log("計算不可能")
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
