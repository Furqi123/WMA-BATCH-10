// data types
//  jis cheez ke age () brcket ajye to yeh function h
// function 2 tarah ke hote h user defined or built in function
// agr inveted coma mn kuxh likhenge to yeh string h 
// agr koi number hoto wo integer h 
// point mn number honge to float kahenge


// var abc = "Furqan Azeem";
// alert(abc);



//  document.write('<h1>THIS IS JS 1ST CLASS</h1>');
// document.write('<h1>' + 'hello world' + '</h1>')

// var firstName = "FURQAN";
// var lasttName = "AZEEM";
// document.write(firstName + " " + lasttName);


// var num1 = "2";
// var num2 = 4;
// document.write(num1 * num2)
// ;


// + ke sign pr concat krega us soorat mn jb string hogi
// + ke sign pr add krega jb dono integer ho
// - subtrat krega jb ek string aur ek number ho or jb integer ho tb bhi
// same minus wali cheez * / % pr apply hogi
// jb yeh string ho jisme alphapet ho or ek integer ho 

// var num1 = prompt("enter your first number")
// document.write(num1);




var num1 = +prompt("ENTER 1ST VALUE");
var num2 = +prompt("ENTER 2ND VALUE");
var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var modul = num1 % num2;

document.write(
  "<table border = 1>" +
  "<tr>" +
  "<th>" + "ADDITION" + "</th>" +
  "<th>" + "SUBTRACTION" + "</th>" +
  "<th>" + "MULTIPLICATION" + "</th>" +
  "<th>" + "DIVITION" + "</th>" +
  "<th>" + "MODULUS" + "</th>" +
  "</tr>" +
  "<tr>" + 
   "<td>" + add + "</td>" +
   "<td>" + sub + "</td>" +
   "<td>" + mul + "</td>" +
   "<td>" + div + "</td>" +
   "<td>" + modul + "</td>" +
  "</tr>" +
  "</table>"
)
