// Seleção dos elementos
const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// Função para criar o item da lista
function criarItem(tarefaTexto) {
    // Criar o item de lista
    const li = document.createElement("li");

    // Criar o ícone de check
    const checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check-circle check";
    
    // Adicionar evento para alternar o estado de conclusão
    checkIcon.addEventListener("click", () => {
        li.classList.toggle("concluida");
    });

    // Criar o texto da tarefa
    const span = document.createElement("span");
    span.textContent = tarefaTexto;

    // Criar o ícone de exclusão
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash-can close";  // Classe para o botão de exclusão ficar vermelho

    // Adicionar evento para excluir a tarefa
    trashIcon.addEventListener("click", () => {
        li.remove();
    });

    // Montar o item
    li.appendChild(checkIcon);
    li.appendChild(span);
    li.appendChild(trashIcon);

    // Adicionar à lista
    lista.appendChild(li);
}

// Adicionar funcionalidade ao botão de incluir
btn.addEventListener("click", function () {
    const tarefaTexto = tarefa.value.trim();

    // Verificar se o campo de entrada não está vazio
    if (tarefaTexto === "") {
        alert("Digite uma tarefa válida!");
    } else {
        criarItem(tarefaTexto);
        tarefa.value = ""; // Limpar o campo de texto
    }
});

// Adicionar uma funcionalidade de pressionar "Enter" para incluir a tarefa
tarefa.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && tarefa.value.trim() !== "") {
        criarItem(tarefa.value.trim());
        tarefa.value = "";
    }
});
