// // Name for click button.....

// const btn = document.querySelector("#buttn")
// const box = document.querySelector("#nameContainer")


// console.log(btn)
// console.log(box)

// btn.addEventListener("click",(e)=>{
//     box.innerText = "Feroz Ali"
// })







// ---------------dDay23-------Search Fetch--------------



console.log("Hello")

async function getData(){
    // const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/")
    // const data = await fetchData.json()
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/")
    console.log(data)
}

getData()

console.log("Byeee")