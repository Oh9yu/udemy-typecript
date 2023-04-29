//유니언 타입 ==> 복합 타입
var combine = function (input1, input2, resultType) {
    var result;
    if (resultType === "as-number") {
        result = +input1 + +input2;
    }
    else
        result = input1.toString() + input2.toString();
    return result;
};
var combinedNumberAges = combine(10, 29, "as-number");
console.log(combinedNumberAges);
var combinedStringAges = combine("kwon", "kim", "as-text");
console.log(combinedStringAges);
//리터럴 타입 ==> 고정값을 가지는 타입
