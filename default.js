function add(num1,num2) {
    
    // if (num2 == undefined) {
    //     num2 =0;
    // }
    num1 = num1 || 1;
    console.log(num1);
    console.log(num2);
    return num1+num2;
   
}
console.log(add(undefined,5));