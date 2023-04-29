//type 별칭
type Combinable = number | string;
type ConversionDesc = "as-number" | "as-text";

const combine = (
  //유니언 타입 ==> 복합 타입
  input1: Combinable,
  input2: Combinable,
  //리터럴 타입 ==> 고정값을 가지는 타입
  resultType: ConversionDesc
) => {
  let result;

  if (resultType === "as-number") {
    result = +input1 + +input2;
  } else if (resultType === "as-text") {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combinedNumberAges = combine(10, 29, "as-number");

console.log(combinedNumberAges);

const combinedStringAges = combine("kwon", "kim", "as-text");

console.log(combinedStringAges);
