const form = document.getElementById("sinin-form")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const name = document.getElementById('user-name').value
    const mail = document.getElementById('user-email').value
    const password = document.getElementById('user-pass').value
    const confirmPass = document.getElementById('confirm-pass').value


    
    if (!name || !mail || !password) {
        alert("Preencha todos os campos!")
        return
    } 

    if (!mail.includes("@") || !mail.includes(".")) {
        alert("Email inválido.")
        return
    }

    if (password !== confirmPass) {
        alert("As senhas devem ser iguais!")
        return
        
    }

    const users = {
    name,
    email: mail,
    password
};

localStorage.setItem("users", JSON.stringify(users))
alert("Usuário cadastrado com sucesso!")

window.location.href = "login.html"

})

