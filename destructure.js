// const person = {name: "ansar", age: 23, job: "web dev", gfName: "N", address: "saidpur", friends: ["badsha", "akhu vai", "rakib bro",22]};

// const {name, job, gfName , address, salary,age} =person;

// console.log(name, job, gfName, address);
// console.log(age);

// const friends = ["ansar", "mahatib", "salman","kalman","talman"];
// const [firstF,secondF, ...bakiF]=friends;
// console.log(firstF,bakiF);

const complexObject = {
    name: "ansar",
    info:{
        fullName: "ali ansar",
        job:" web dev",
        hobby: "singing"
    }
}
const {fullName,hobby} = complexObject.info;
console.log(fullName);