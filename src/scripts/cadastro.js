const form = document.getElementById("form");
const usarname = document.getElementById("usarname");
const sobrenome = document.getElementById("sobrenome");
const data = document.getElementById("data");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const senha = document.getElementById("senha");
const confirmeSenha = document.getElementById("confirmeSenha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("CADASTRADO COM SUCESSO!!!");
})
