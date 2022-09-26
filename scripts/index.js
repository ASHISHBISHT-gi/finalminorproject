const loginButton = document.getElementById("login");
const submitBtn = document.getElementById("login2");
const popup = document.getElementsByClassName("loginform");

loginButton.addEventListener("click",()=>{
    console.log("hello");
    popup[0].style.display = "flex"
})

submitBtn.addEventListener("click",()=>{
    popup[0].style.display = "none"
})