const loginButton = document.getElementById("login");
const submitBtn = document.getElementById("login2");
const popup = document.getElementsByClassName("loginform");
const imagearray = ["./resources/miniproject/Rectangle 4.png","./resources/miniproject/Rectangle 2.png","./resources/miniproject/Rectangle 5.png"]
loginButton.addEventListener("click",()=>{
    console.log("hello");
    popup[0].style.display = "flex"
})

submitBtn.addEventListener("click",()=>{
    popup[0].style.display = "none"
})


void updateCasrol(){
    
}