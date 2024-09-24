document.write(" <br>  <br> 成功使用JavaScript")
cal.addEventListener('click' , function () {
  ans = window.prompt("請輸入計算範圍")
  if (isNaN(ans)) {
    window.alert("無效數字")
    return
  }
  var result = new Array;
  for (let x = 1; x <= ans; x++) {
    if (x !== 1 && x % 2 > 0 && x % 3 > 0 && x % 5 > 0 && x % 7 > 0 || (x === 2 || x === 3 || x === 5 || x === 7 )) {
      if (x % 2 > 0) {
        result.push(x)
      }
      else if (x % 3 > 0) {
        result.push(x)
      }
      else if (x % 5 > 0) {
        result.push(x)
      }
      else if (x % 7 > 0) {
        result.push(x)
      }
      else if (x === 2) {
        result.push(x)
      }
      else if (x === 3) {
        result.push(x)
      }
      else if (x === 5) {
        result.push(x)
      }
      else if (x === 7) {
        result.push(x)
      }
    }
  }
  if (window.confirm('確定計算？')) {
    console.log(".")
    if (!Number.isNaN(result[0])) {
      window.alert("成功")
      document.open('text/html')
      document.write("<h1> 計算結果 </h1>")
      document.write(`從 1 至 ${ans} 的質數包括： <br> <br> ` + result.join("; <br>"));
    } else {
      window.alert("失敗")
    }
       
  } else {
    window.alert("已取消")
    console.log("Action cancelled.")
  }

}, false);

clw.addEventListener('click' , function () {
    window.close();
},false);
