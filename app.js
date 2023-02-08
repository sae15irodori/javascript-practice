var str = "webcamp" //strがグローバルスコープ

function foo() {
  console.log(str)
  var y ="hello"　　//yが関数スコープとなっている
}

foo()
console.loge(y)　//yはfunction{}の中でしか使えないからエラーとなる