console.log("Olá, mundo!");


const button = document.getElementById("login-btn")
const form = document.getElementById("form-login")
const closeAlert = document.querySelector(".close-alert")
const usernameError = document.getElementById("login-error")



 


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameError = document.getElementById("login-error")
    const adminUser = "admin"
    const adminPass = "admin"

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === adminUser && password === adminPass) {
        alert("Login efetuado com sucesso.")

    } else {
        usernameError.classList.remove("username-message")
    }


})

closeAlert.addEventListener("click", () => {
    usernameError.classList.add("username-message")
})