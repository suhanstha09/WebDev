const click = document.querySelector("#login")
const click2 = document.querySelector("#register")
const register = document.querySelector("#register")
const email = document.querySelector("#email")

click.addEventListener("click",(e)=>{
    e.preventDefault()
   window.location.href = "checkform23.html";
})
click2.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href = "register.html";
})
// if (email === "") {
//     show.style.color = "red";
//     show.textContent = "email must be entered..";
//   }else if(email=== "scubashrestha4@gmail.com"){
//     window.open("register.html","_blank")
//   } 
 
