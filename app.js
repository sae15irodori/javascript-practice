for (let i = 0; i < 10; i++){
  console.log(i)
}

console.log(i)

//変数iはfor文内の（）ブロック内で宣言されたもの
//それをブロック外から参照したからエラーになった。
//letによる変数宣言では、宣言されたブロック内が有効範囲となる