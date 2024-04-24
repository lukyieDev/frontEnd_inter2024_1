const form = document.getElementById("form");
const usarname = document.getElementById("usarname");
const sobrenome = document.getElementById("sobrenome");
const user = document.getElementById("user");
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
const modalidade = document.getElementById("models");
const generos = document.getElementsByName("gender");

form.addEventListener("submit", (e)=>{
    e.preventDefault();


    if(validarForm()){
        const generoSelecionado = selectGender();
        //aluno endereco usuario


        axios.post('http://26.240.188.67:8080/alunos', {
            nome: usarname.value,
            sobrenome: sobrenome.value,
            dataDeNascimento: data.value,
            status: "Ativo"
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })

        setTimeout(()=>{
            axios.post('http://26.240.188.67:8080/usuarios', {
                nome: usarname.value,
                email: email.value,
                senha: senha.value,
                telefone: celular.value,
                dataNasc: data.value,
                modalidade: modalidade.value,
                genero: generoSelecionado,
                status: "Ativo",
            })
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        }, 1600)


        setTimeout(()=>{
            axios.post('http://26.240.188.67:8080/enderecos', {
                rua: rua.value,
                numero: numero.value,
                complemento: complemento.value,
                bairro: bairro.value,
                cidade: city.value,
                cep: cep.value,
                status: "Atual"
            }).then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        }, 2700)
        


        Swal.fire({
            position: "center",
            icon: "success",
            title: "Cadastrado com sucesso, você será redirecionado para a página de login!",
            showConfirmButton: false,
            timer: 3000
          })
        
        setTimeout(()=>{
            window.location.href="../pages/loginAluno.html"
        }, 5500)
    }
})


function validarForm(){
    if(!usarname.value == ""){
        if(!usarname.value.match(/^[a-zA-Z]+$/) || !sobrenome.value.match(/^[a-zA-Z]+$/)){
            alert("Nome ou sobrenome deve conter apenas letras.");
            return;
        }
    }else{
        alert("Nome ou sobrenome não devem estar vazios.")
        return;
    }
    if(senha.value != confirmeSenha.value){
        alert("As Senhas não coincidem.");
        return;
    }
    if(senha.value.length < 6){
        alert("A senha deve ter mais de 6 dígitos.");
        return;
    }
    if(cep.value.length != 8){
        alert("O Cep deve conter obrigatoriamente 8 dígitos!");
        return;
    }
    if(!selectGender()){
        return;
    }
    
    return true
}
function celValidate(){
    celular.addEventListener("input", ()=>{
        var maxLength = 11; 
        var valor = celular.value.trim(); 
        var valorInteiro = parseInt(valor); 
        
        
        if (!isNaN(valorInteiro)) {
            if (valor.length > maxLength) {
                celular.value = valor.slice(0, maxLength);
            }
        } else {
            celular.value = '';
        }
    })
}
function cepValidate(){
    cep.addEventListener("input", ()=>{
        var maxLength = 8; 
        var valor = cep.value.trim(); 
        var valorInteiro = parseInt(valor); 
        
        
        if (!isNaN(valorInteiro)) {
            if (valor.length > maxLength) {
                cep.value = valor.slice(0, maxLength);
            }
        } else {
            cep.value = '';
        }
    })
}
function selectGender(){
    let genSelected;
    generos.forEach((gen)=>{
        if(gen.checked){
            genSelected = gen.id;
        }
    })
    if(genSelected != null){
        return genSelected
    }else{
        alert("Um gênero deve ser selecionado.");
        return false;
    }
}
celValidate();
cepValidate();