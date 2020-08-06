const age1 = [23, 55, 26, 88, 100];
const age2 = [3, 5, 6, 8, 10];
const age3 = [333, 555, 666, 888, 100];
const allAges = age1.concat(age2).concat([5040]).concat(age3);
const allAgesArray = [...age1, ...age2, 5, ...age3];
console.log(allAgesArray);
const MaxAge = Math.max(...age3);
console.log(MaxAge);
