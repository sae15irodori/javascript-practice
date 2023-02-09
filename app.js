let alertString;                   //変数alertStringを宣言
alertString = addString("WebCamp");//変数の中身はaddString関数。引数も指定。
alert(alertString);               //アラートにalertString変数の中身表示させる


function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}