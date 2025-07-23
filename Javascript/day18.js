let h1 = document.getElementById("heading")
let h2 = document.querySelector(".check")

// h1.innerHTML="Yo h1 ko content aarkai thyo yesari chaii content change gareko.."     //yesma chaii html code like paragraph p laii span garauna man laagla rey teti bela yo use garna sakinxa my lord hehehe..
h1.innerHTML="<span>Inside</span>"
h2.innerText = "yo dosro choti aarko method use garera change gareko..or yesma chaii only text matra hunxa"




let value=0
let btn1 = document.querySelector(".incrementButton")
let btn2 = document.querySelector(".decrementButton")
let span = document.querySelector(".span1")

btn1.addEventListener("click",function(){
    console.log("Increment button clicked.")
    // alert("Button clicked")
    // span.innerText="4"
    span.innerText=++value
})

btn2.addEventListener("click",function(){
    console.log("Decrement button clicked.")
    span.innerText=value--
})




// call back funtion demo
// // function greet(name, callback) {
// //   console.log("Hi " + name);
// //   callback(); // call the function passed in
// // }

// // function sayBye() {
// //   console.log("Bye!");
// // }

// // greet("Feroz", sayBye);




// console.log(h1,h2)      //continue without new line or terminating line..
// console.log(btn)        //automatically terminate line and show on next new line..  








// //To insert beep sound in button click using js

// document.getElementById("area").addEventListener("click", function () {
//   const beep = document.getElementById("beepSound");
//   beep.play();
// });





//---------day 20------------

