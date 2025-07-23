const form = document.querySelector("#validation")
    const show = document.querySelector("#message")
    const inputP = document.querySelector("#userPass")

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const password = inputP.value;
      const minLength = /.{8,}/;
      const upperCase = /[A-Z]/;
      const correctPassword = "Password"

      if (password === "") {
        show.style.color = "red";
        show.textContent = "Password must be entered..";
      }else if(password===correctPassword){
        window.open("day23SearchFetch.html","_blank")
      } 
      else if (!minLength.test(password) || !upperCase.test(password)) {
        show.style.color = "red";
        show.textContent = "Password is invalid! Must have at least 8 characters and one uppercase letter.";
      } else {
        show.style.color = "green";
        show.textContent = "Password is valid!";
      }
    })