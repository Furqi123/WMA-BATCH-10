//setInterval // aap isko btadete ho chlna kha se h phr yh chlta he leta h 
// setTimeout // mhuje time do us time ke baad ek dafa chlega
// clearInterval //set interval ko rock dega
// clearTimeout  //set timneout ko rok dega
//jis function ka name nh hota use anonymus function kehte h 

// setInterval(function(){
// document.write('hello world'+ "<br>")
// },1000) 


// jo apne andr ek aur function leta h use callback kehte h

// function timer(){
//     document.write('furi'+"<br>")
// }

// setInterval(timer,4000)

// setTimeout(function(){
//     document.write("furi")
// },2000)

// var num =0
// setInterval(function(){
//     num++
//     console.log(num)
// },100)
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('mil')
var interval;


function start(){
   interval = setInterval(function(){
        milliseconds++
        getmili.innerHTML = milliseconds;
        if(milliseconds>=100){
          seconds++
          getsec.innerHTML = seconds;
          milliseconds = 0
  
        } 
        else if(seconds >=5){
          minutes++
          getmin.innerHTML = minutes
          seconds = 0
        }
  },10)
}
function stop(){
clearInterval(interval)
}

function reset(){
    minutes = 0
    milliseconds = 0
    seconds = 0
    getmili.innerHTML = milliseconds
    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
}

