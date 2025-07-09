console.log("Olá, mundo!");


const button = document.getElementById("login-btn")
const form = document.getElementById("form-login")
const closeAlert = document.querySelector(".close-alert")
const usernameError = document.getElementById("login-error")



 


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameError = document.getElementById("login-error")

    const usermail = document.getElementById("usermail").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("users"))

    if (!savedUser) {
        alert("Nenhum usuário cadastrado!")
        return
    }

    if (usermail === savedUser.email && password === savedUser.password) {
        alert(`Login efetuado com sucesso. Seja bem vindo ${savedUser.name}`)
        window.location.href = "dashboard.html"

    } else {
        usernameError.classList.remove("username-message")
    }


})

closeAlert.addEventListener("click", () => {
    usernameError.classList.add("username-message")
})