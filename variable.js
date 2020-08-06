let sum=0;
for(var i=0;i<5;i++){
    sum+=i;
    var k=0;
}
console.log(sum);
console.log(k);

function recursion (number) {
    if(number==0){
        return 0
    }
    else{
        return recursion(number -1);
    }
}

console.log(recursion(4));