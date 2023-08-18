//array is a collection of data
// var arr = ['furi','azeem',24,true];
// document.write(arr[0]+" "+arr[2]);


// array 6 basic method
//1)arr.push(array ke last mn value add krega)
//2)arr.pop(array ke last mn value remove krega)
//3)arr.unshift(array ke start se value add krta h)
//4)arr.shift(array ke start se value remove krta h)
//5)arr.splice(array mn khi bh value add ya remove krni hoto splice use hota h)

var arr = ['furi','azeem',24,true]
// arr.push('hamza');
// arr.pop()
// arr.unshift('saqib','hamza');
// arr.shift()
arr.splice(3,1,"hello world",'furi2')
// arr.splice(2,2,"abc") //yeh 2 parameter leta h pehle yeh puchta h ke start kha se krna
// h dusra parameter mn yh btana hota h ke agr value remove krni h to quantity 
//to btao ke kitni krni h or agr koi value add krni h to comma lgakr wo value likh do 
document.write(arr);