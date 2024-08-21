// const email=document.getElementById("email");
// const password=document.getElementById("password");
// const submit =document.getElementById("submit-btn");
// const login=document.getElementById("login");
// const logout=document.getElementById("log out");
const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email=form.email.value
    const password=form.password.value
    
    const authenticated=authentication(email,password)
    if(authenticated){
        window.location.href="./home.html"
    }else("wrong")
})

// function submitInput(){
//     localStorage.setItem("email",email.value);
//     localStorage.setItem("password",password.value);
//     const authenticated=authentication(email,password)
    
// }

function authentication(email,password){
    if(email==="ashi@gmail.com" && password==="password"){
        return true
    }else{
        return false
    }
}