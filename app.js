function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}

foo()

//foo()という名前の関数の中に変数xとyがあり、それぞれコンソールログに出力
//ただし、変数ｙが宣言した｛｝より外で呼び出されているのでエラーとなってしまう