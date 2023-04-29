const add = (
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) => {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else return result;
};

let number1: number = 5; // 5.0
let number2: number = 2.4;
let printResult: boolean = true;
const phrase: string = "showResult : ";

const result = add(number1, number2, printResult, phrase);

console.log(result);
