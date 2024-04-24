const studentTableBody = document.querySelector(".studentsTable tbody");

async function onStart(){
    const alunosMatriculados = await axios.get('http://26.240.188.67:8080/alunos');

    alunosMatriculados.data.forEach((element) => {
        const randomNum = Math.random() < 0.5 ? 1 : 2;
        const modal = randomNum == 1 ? "Jiu Jitsu" : "Crossfit";

        console.log(element)

        let newRow = document.createElement("tr");

        let nameCell = document.createElement("td");
        let surnameCell = document.createElement("td");
        let modalCell = document.createElement("td");

        nameCell.textContent = element.nome;
        surnameCell.textContent = element.sobrenome;
        modalCell.textContent = modal;

        newRow.appendChild(nameCell);
        newRow.appendChild(surnameCell);
        newRow.appendChild(modalCell);

        studentTableBody.appendChild(newRow);
    });
}
onStart();