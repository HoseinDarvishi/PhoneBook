var $ = document;
var input = $.getElementById('input');
var parentList = $.getElementById('parentList');

$.body.onload=function(){
  for (var i = 0 ; i < localStorage.length;i++){
    var newNum = $.createElement('li');
    newNum.className = "m-1 border-bottom p-3 w-100 bg-light bg-white rounded";
    newNum.innerHTML = localStorage.getItem(`number${i}`);
    parentList.append(newNum);
  }
}
$.getElementById('btnInsert').onclick = function(){
  if (input.value){
    var newNum = $.createElement('li');
    newNum.className = "m-1 border-bottom p-3 w-100 bg-light bg-white rounded";
    newNum.innerHTML = input.value;

    var i = localStorage.length
    localStorage.setItem(`number${i}`,input.value);

    // for (var i = localStorage.length ; i<arrayStorage.length;i++){
    //   localStorage.setItem(`number${i}`,arrayStorage[i]);
    // }

    parentList.append(newNum);
    input.value="";
  } else {
    alert("Enter Your number !! ");
  }
}
$.getElementById('btnDelete').onclick = function(){
  if (confirm('Are You Sure You Want Remove All Numbers ???') == true){
    while(parentList.hasChildNodes()){
      parentList.removeChild(parentList.firstChild);
    }
    localStorage.clear();
  }
}