// if statment


// assigning operator = value assign krta h
// == value check krta h
// === value ke sath data type bh check krta h
// && ka operator left side bh check krta h aur right side bh check krta h agr
// dono condition true hojayengi tabhi jakr wo program ko execute krega.
// || ka operator yeh krta h ke left or right mn se koi bhi ek condition true hojaygi
// program execute hojaega
//< less than
//> greater than
// <= less than equal to
//>= greter than equal to
//!= not equal to


// if(5  === "5"){
//   console.log(true)
// }else{
//     console.log(false)
// }




// var email = prompt("enter email")
// var password = prompt("enter password");

// if(email == 'furi' || password == '7890'){
//     document.write('login succesful');
// }else{
//     document.write('invalid username or password');
// }


//marksheet program


var userName = prompt("enter your name");
var eng = +prompt("enter your numbers \n English:");
var urdu = +prompt("enter your numbers \n urdu:");
var pst = +prompt("enter your numbers \n PST:");
var isl = +prompt("enter your numbers \n Islamiat");
var math = +prompt("enter your numbers \n Math");
var tot = eng + urdu + pst + isl + math;

var percentage = (tot/500)*100;



if(percentage >= 80 && percentage < 101){
  document.write(userName +" your grade is A+")
}
else if(percentage >=70 && percentage <80){
    document.write(userName +" your grade is A")
}
else if(percentage >=60 && percentage <70){
    document.write(userName +" your grade is B")
}
else if(percentage >=50 && percentage <60){
    document.write(userName +" your grade is C")
}
else if(percentage >=40 && percentage < 50){
    document.write(userName +' your grade is D')
} else if(percentage >100 ){
    document.write("invalid percentage");
}
else{
    document.write(userName +" you are fail")
}  

