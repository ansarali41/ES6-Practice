class Student{
    constructor(SId, SName){
        this.id=SId;
        this.name=SName;
    }
}
const Student1= new Student(41,'ansar');
const Student2= new Student(42,"akhu");
console.log(Student1.name,Student2.name);