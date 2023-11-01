//jo function hum object ki kisi property mn bnaye to use method kehte h

/*var  student = {
    firstName: "Furqan",
    lastName: 'Azeem',
    getFullName: function(){
     return this.firstName + " " +this.lastName 
    }
}
var userInput = 'ghous'
student.firstName = userInput
console.log(student.getFullName()); */

//getFullName() is a method of student object


var students = [
    {
        firstName: 'Furqan',
        lastName: 'Azeem'
    },

    {
        firstName: 'zain',
        lastName: 'khan'
    },

]

function Student(a,b){
this.firstName = a
this.lastName = b
}

var student = [
    new Student("ghous", "ahmed"),
    new Student("furi","azeem"),
    new Student("zain","khan")
    ]

//constructure humai new object bnakr deta h
console.log(student);
