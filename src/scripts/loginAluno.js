const userField = document.getElementById("user");
const passwordField = document.getElementById("pass");
const confirmButton = document.querySelector(".submitButton");
const form = document.querySelector(".formContainer");


    confirmButton.addEventListener("click", (e)=>{

        if(userField.value=='' || passwordField.value==''){
            alert("Campos não devem estar vazios.")
            return;
        }

        axios.post('http://26.240.188.67:8080/usuarios/login', {
            nome: userField.value,
            senha: passwordField.value
        })
        .then((response)=>{
            if(response.status == 200){
                console.log(response)
                window.location.href= "../pages/portalAlunosHorarios.html"
            }
        })
        .catch((error)=>{
            if(error.response.status == 404 || error.response.status == 403){
                alert("Usuário não encontrado, verifique seu usuário e senha.")
                return;
            }
        })
    })


