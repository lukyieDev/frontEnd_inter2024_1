const form = document.getElementById("form");
const usarname = document.getElementById("usarname");
const sobrenome = document.getElementById("sobrenome");
const data = document.getElementById("data");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const senha = document.getElementById("senha");
const confirmeSenha = document.getElementById("confirmeSenha");
const rua = document.getElementById("rua");
const numero = document.getElementById("number");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");
const city = document.getElementById("city");
const cep = document.getElementById("cep");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    console.log(data.value);
})

function onStart(){

}

onStart();