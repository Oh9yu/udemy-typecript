// unknown 아무타입 할당가능
// any와 비교했을때 좀더 제한적이다 (타입이 정해져야 할당가능)

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Kwon";

console.log(userInput);

//unknown의 경우 타입을 설정한 뒤에 할당할수 있음
if (typeof userInput === "string") {
  userName = userInput;
}

function throwError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

throwError("Not found", 404);
