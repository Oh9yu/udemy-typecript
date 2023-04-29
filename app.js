//객체 타입을 설정할 때 먼저 값에 대한 타입을 설정하고 값을 설정한다
var Gender;
(function (Gender) {
    Gender[Gender["MEN"] = 1] = "MEN";
    Gender[Gender["WOMEN"] = 2] = "WOMEN";
})(Gender || (Gender = {}));
var person = {
    name: "kwon",
    age: 17,
    hobbies: ["soccer", "cook", 1],
    role: [2, "author"],
    gender: 1,
};
console.log(person.name);
person.hobbies.map(function (value) {
    console.log(value);
});
if (person.gender === 1) {
    console.log("남");
}
//중첩 객체 타입
var product = {
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
