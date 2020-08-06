// function add(num) {
//     return num+5;
// }
// const addition=function add(num) {
//     return num+5;
// }
// const addition = num => num+55;
// const multi = num => num*55;
// const div = (num) => num/2;
// console.log(multi(5));
// console.log(div(5));

const doMath = (num1, num2) => {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        return "even";
    }
    else {
        return "Odd";
    }
}
console.log(doMath(105,22));
