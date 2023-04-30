function add(n1: number, n2: number) {
  //함수 : return 타입 설정
  return n1 + n2;
}
// void : 표준적으로 값을 반환하지 않는 함수타입
function printResult(num: number): void {
  console.log("Result : " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// 화살표 함수로 :function 이라는 함수타입을 설정하고 매개변수 타입을 설정해서 함수 할당
let combineValues: (a: number, b: number) => number = add;

console.log(combineValues(1, 2));

addAndHandle(1, 2, (result) => {
  console.log(result + 1);
});
