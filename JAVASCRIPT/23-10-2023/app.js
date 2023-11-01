// function Student(a,b){
//     this.firstName = a
//     this.lastName = b
//     this.getFullName = function(){
//         return this.firstName + " " + this.lastName
//     }
// }
// var student =  new Student("Furqan","Azeem")
// console.log(student.getFullName())

// function student(a,b){
//     return{
//         firstName: a,
//         lastName: b,
//     }
// }
// console.log (student("furi","ghous"))

//prototype

// function Student(a,b){
//     this.firstName = a
//     this.lastName = b
// }


// Student.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName
// }

// var student =  new Student("Furqan","Azeem")
// console.log( 'hasOwnProperty' in student)


var obj = {
    name: 'furi',
    phone: 45678899642,
    age: 17,
}
var keys = Object.keys(obj);
for (var i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]])
}