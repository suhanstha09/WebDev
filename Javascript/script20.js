
// let btn = document.querySelector("button")

// // function change() {
// //     let val = '0123456789ABCDEF'
// //     let hash = '#'
// //     // console.log(val[15])             //to print F from the given data of val

// //     for (let i = 0; i < 6; i++) {
// //         hash = hash + val[Math.floor(Math.random() * 16)]
// //     }
// //         return hash
// // }

// // // console.log(btn)

// // // console.log(change())


// // // To call this above function
// // // change()



// // //To add this two data or attach this two data....
// // // let str1 = "Feroz"
// // // let str2 = "Miya"


// // // console.log(str1 + str2)          //attached them like FerozMiya.....


// // //to show random value and eliminate decimal values....
// // // console.log(Math.random())
// // // console.log(Math.floor(3.14))


// // /**
// //  * Changes the background color of the document body by setting it to the value returned by the `change` function.
// //  */
// // function changeColor(){
// //     document.body.style.backgroundColor = change()
    
// // }

// // // to style background color of button 
// // // // // btn.addEventListener("click", ()=>{
// // // // //     btn.style.backgroundColor = change()
// // // // // })


// // // To style the background of the body
// // btn.addEventListener("click",()=>{
// //      document.body.style.backgroundColor = changeColor()
// // })




// // //To style the button content using js....

// // btn.addEventListener("click", ()=>{
// //     // btn.style.backgroundColor = change()
// //     btn.style.color = change()
// //     btn.style.fontSize = "20px"
// //     btn.style.padding = "10px"
// // })



// let val= 1

// function change() {
//     let bg = "#000000"
//     let bg1 =  "#ffffff"
//     val++
//     if(val%2==0){
//         return bg
//     }
//     else{
//         return bg1
//     }
// }


// let val2 = 2
// function changeT() {
//     let bg = "#000000"
//     let bg1 =  "#ffffff"
//     val2++
//     if(val%2==0){
//         return bg1
//     }
//     else{
//         return bg
//     }
// }

// let val3 = 3
// function changeB() {
//     let bg = "#00ddffff"
//     let bg1 =  "#fff234"
//     val3++
//     if(val%2==0){
//         return bg1
//     }
//     else{
//         return bg
//     }
// }

// let val4 = 4
// function changeBT() {
//     let bg = "#686967ff"
//     let bg1 =  "#b4812fff"
//     val4++
//     if(val%2==0){
//         return bg
//     }
//     else{
//         return bg1
//     }
// }



// btn.addEventListener("click",function(){
//     document.body.style.backgroundColor = change()
//     document.body.style.color = changeT()
//     btn.style.backgroundColor = changeB()
//     btn.style.color = changeBT()
// })



// // btn.addEventListener("click", ()=>{
// //     // btn.style.backgroundColor = change()
// //     btn.style.color = change()
// //     btn.style.fontSize = "20px"
// //     btn.style.padding = "10px"
// // })



// let form = document.querySelector("#new-item-form")


// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     const item_container = document.createElement("div")

    
// })








// ------------day22----------euta box ko data laii arko box ma pass garney uhuuu-------------//


const commentForm = document.querySelector("#new-item-form")
const commentInput = document.querySelector("#item-input")
const commentListContainer = document.querySelector("#comment-list")



// console.log(commentListContainer)
// console.log(commentInput)
// console.log(commentForm)


commentForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newCommentText = commentInput.value.trim()           //input box or dabba ma diyeko or typed content laii store garera paxi use 
                                                                // garna laii save garney method by creating one more new variable.....
                                                                //ani trim() chaii trim garna like space space feroz space space xa bhaney space
                                                                //space haru laii trim garxa ani exact value laii matra ligxa thankyou......
    console.log(newCommentText)

    if(newCommentText===""){
        alert("Please ramro sanga lekhnush tw..")
        return
    }

    // if(newCommentText==="#"){
    //     alert("Please ramro sanga lekhnush tw..")
    //     return
    // }

    // if(newCommentText==="@"){
    //     alert("Please ramro sanga lekhnush tw..")
    //     return
    // }


    // create new comment container

    const newCommentDiv = document.createElement("Div")
    newCommentDiv.classList.add("comment")
    // <div class = "comment"></div>

    const commentHeading = document.createElement("h1")
    commentHeading.innerText = newCommentText

    // console.log(commentHeading)              //to print the data of commentHeading variable in line 208..

    const deleteButton = document.createElement("span")
    deleteButton.innerHTML = "X"
    deleteButton.classList.add("delete-btn")


    deleteButton.addEventListener("click",()=>{
        commentListContainer.removeChild(newCommentDiv)
    })

    const editButton = document.createElement("span")
    editButton.innerHTML = "Edit"
    editButton.classList.add("edit-btn")

     editButton.addEventListener("click", () => {
        const naya = prompt("Edit your comment:", commentHeading.innerText)
        if (naya !== null) {
            const trimExtra = naya.trim()
            if (trimExtra === "") {
                alert("Please ramro sanga lekhnush tw..")
            } else {
                commentHeading.innerText = trimExtra
            }
        }
    })

    newCommentDiv.appendChild(commentHeading)
    newCommentDiv.appendChild(editButton)
    newCommentDiv.appendChild(deleteButton)
    commentListContainer.appendChild(newCommentDiv)
    commentInput.value = ""
})
