// var arr = [1,2,3,4,5,6,7,8,9,10]

// var arr2 = arr.slice(0);
// console.log(arr2);

// var num = 5
// var result = ++num + num++ + num + ++num - --num
  //           6    +  6    + 7   +  8    -   7 = 20
// document.write(result)




//for and while loop
// for or while loop mn condition ka true hona must h 
// do while loop
// lekin do while mn agr condition false bh hogyi to loop ek dafa chelga
// var i
// for(i =1;i<=10;i++){
//   document.write(i +") hello world <br>")
// }

//reverse loop
// var i;
// for(i = 10;i >= 0; i--){
//     document.write(i+"<br>")
// }


// loop on array
//  var arr = [1,2,3,4,5,6,7,8,9,10,"furi"]
//  for(var i = 0;i<arr.length;i++){
//     document.write(arr[i],"<br>")
//  }

//by creating a table through loop

// var userInput = +prompt("enter value")
// for(var i = 1; i<=10;i++){
//     document.write(userInput +" X "+i+" = "+ userInput*i +"<br>")
// }


var tableVlue = +prompt("Enter value which you want table");
var howManyTime = +prompt("Enter value you want this table print");
for(i=1;i<=howManyTime;i++){
    document.write(tableVlue + " X "+i+" = "+ tableVlue*i + "<br>")
}

