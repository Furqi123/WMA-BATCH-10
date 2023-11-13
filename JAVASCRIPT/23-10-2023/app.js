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


// var obj = {
//     name: 'furi',
//     phone: 45678899642,
// }
// var keys = Object.keys(obj);
// for (var i = 0; i < keys.length; i++) {
//     console.log(obj[keys[i]])
// }


// console.log(Object.entries(obj))




// var obj = {
//     name: 'furi',
//     email: 'furi@gmail.com',
// }

//JSON ek data format h 

// var strObj = JSON.stringify(obj);
// console.log(JSON.parse(strObj))





// function submit(){
//     var name = document.getElementById('name')
//     var store = localStorage.getItem("students")
//     var arr = JSON.parse(store);

//     if(!arr){
//         arr = []
//     }
//     var student = {
//         name: name.value
//     }
// arr.push(student)
//     localStorage.setItem("students",JSON.stringify(arr))

//     name.value = ""
// }

// var user = localStorage.getItem("user")

// if(!user){
//     alert("welcome")
// }

// localStorage.setItem("user",true)