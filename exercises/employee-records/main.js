const employees =[];

function Employee(name,jobTitle,salary,status ="Full time"){
    this.name = name;
    this.jobTitle= jobTitle;
    this.salary= salary; 
    this.status= status;
    this.printEmployeeForm =function(){
        console.log ("name: " + this.name + "jobtitle" + this.jobTitle + "salary" + this.salary + "status" + this.status)
       
    
    }
}
let employee1 =new Employee("charles","Bossman","400k")
let employee2 =new Employee("Moroni","Co-Founder", "300k")
let employee3 =new Employee("Lynn", "COO", "500k")


employee2.status ="Part Time"


employees.push(employee1,employee2,employee3)
// employees.push(employee2)
// employees.push(employee3)

employees.forEach(items => items.printEmployeeForm())