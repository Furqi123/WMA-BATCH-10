//dom
// console.log(document.childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes); 
// console.log(document.childNodes[1].childNodes[2].childNodes[0].nodeType);
// console.log(document.childNodes[1].firstChild)
// console.log(document.childNodes[1].lastChild)
// console.log(document.childNodes[1].parentNode)
// console.log(document.childNodes[1].firstChild.nextSibling.nextSibling);
// console.log(document.childNodes[1].firstChild.nextSibling.previousSibling);
// console.log(document.childNodes[1].nodeName)
// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].nodeValue);

// var div = document.createElement("div")
// var p1 = document.createElement("p")
// var h1 = document.createElement("h1")
// var p2 = document.createElement("p")
// div.appendChild(p1);
// div.appendChild(h1);
// div.appendChild(p2);

// var p1Text = document.createTextNode('test')
// var h1Text = document.createTextNode('test')
// var p2Text = document.createTextNode('test')

// p1.appendChild(p1Text)
// h1.appendChild(h1Text)
// p2.appendChild(p2Text)
// console.log(div);



// function submit(){
    // var main = document.getElementById('main')
    // main.firstChild.nextSibling.remove()
//    console.log(event.target.parentNode.childNodes[1].remove())
// }


// Object


// var student = {
//     name: 'furi',
//     email: "furi@gmail.com",
//     phone: 45224567789,
//     enroll: true

// }


// student.class = {  
//     name: "WAM",    //nested object
//     time : "9 - 11"
// }


// student.subject = ['HTML', 'CSS', 'JAVASCRIPT']

// student.subject.push('REACT')
// student.subject.pop()


// student.class = 'wma' //add proprty in object
// delete student.class   //delete proprty from object



// console.log( 'class' in student)


//  var carsData = {
//     honda: {
//         civic : {
//             reborn : {
//                 name: 'Honda Civic Reborn',
//                 year: 2022,
//                 price: 2000,
//                 colors : ['red','black','white']
//             }
//         },
//         mehran : {

//         }
//     },
//     toyota : {
//         corolla: {
//             gli: {
//             name: 'toyota corolla gli',
//             year: 2022,
//             price: 2000,
//             colors : ['red','black','white']
//         }
//       }
//     }
//  }


//  var user = 'honda'
//  var model = 'civic'
//  var varient = 'reborn'
// //  console.log(carsData[user][model][varient])


// for(var key in carsData){
//    for(var key1 in carsData[key]){
//    for(var key2 in carsData[key][key1]){
//     console.log(carsData[key][key1][key2].name)
//    }

//    }
// }


