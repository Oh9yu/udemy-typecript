//객체 타입을 설정할 때 먼저 값에 대한 타입을 설정하고 값을 설정한다
enum Gender {
  MEN = 1,
  WOMEN = 2,
}

const person: {
  name: string;
  age: number;
  hobbies: any[]; //배열타입 ==>  string[] , number[] , any[]
  role: [number, string]; //튜플타입==> 길이가 고정된 배열
  //Enum 타입 ==> enum{new, old} 열거할 때 사용
  gender: Gender;
} = {
  name: "kwon",
  age: 17,
  hobbies: ["soccer", "cook", 1],
  role: [2, "author"],
  gender: 1,
};

console.log(person.name);

person.hobbies.map((value) => {
  console.log(value);
});

if (person.gender === 1) {
  console.log("남");
}

//중첩 객체 타입

const product: {
  id: string;
  price: number;
  quantity: number;
  tag: string[];
  details: {
    title: string;
    desc: string;
  };
} = {
  id: "a123",
  price: 1000,
  quantity: 2,
  tag: ["row", "black"],
  details: {
    title: "shoes",
    desc: "dunk row",
  },
};

console.log(product);
