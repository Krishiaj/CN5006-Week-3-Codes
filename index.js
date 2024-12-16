// defination of the function EmployeeInfo
function EmployeeInfo(Name, Salary) 
{
  console.log("Welcome "+ Name + " Your monthly salary is "+ Salary)
}

console.log("This is my first programe")

// declaration of variables
let EmpName = "John Doe";
let EmpSalary = 50000;

//calling of the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);
// code for the Second Exercise starts from here:
const EmpSkills = (skills)=> {
  console.log("Expert in" + skills);
};
EmpSkills("Java");

const student= require('./StudentInfo')
const person = require('./Person')
//becaause getName is the function as we use()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
//because dob is a variable we do not need to use()
console.log(student.Studentgrade())
console.log("grade is "+ student.Studentgrade(55))
//creating a new person
person1= new person("Jim","USA","jim@example.com")
console.log("using Person Module", person1.getPersonInfo())
console.log("Programe ends here")