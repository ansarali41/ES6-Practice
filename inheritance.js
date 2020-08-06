class Parents {
    constructor() {
     this.fatherName = "kala sikhdar";
    }
}
class child extends Parents {
    constructor(name ,age) {
        super();
        this.name = name;
        this.age = age;
    }
    display(){
        return `${this.fatherName} ${this.name} ${this.age}`;
    }
}
const baby1 = new child('nil sikhdar', 12);
const baby2 = new child('pink sikhdar', 22);
console.log(baby1.display(), baby2);