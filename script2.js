const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// Adicionar funcionalidade ao botão de incluir
btn.addEventListener("click", function () {
    if (tarefa.value.trim() === "") {
        alert("Digite uma tarefa válida!");
    } else {
        // Criar um novo item da lista
        const li = document.createElement("li");

        // Ícone de check
        const checkIcon = document.createElement("i");
        checkIcon.className = "fas fa-check-circle check";

        // Evento para alternar estado de concluído
        checkIcon.addEventListener("click", function () {
            const span = li.querySelector("span");
            if (span.style.textDecoration === "line-through") {
                span.style.textDecoration = "none";
                checkIcon.style.color = "#000"; // Cor padrão
            } else {
                span.style.textDecoration = "line-through";
                checkIcon.style.color = "#349223"; // Cor verde
            }
        });

        // Texto da tarefa
        const span = document.createElement("span");
        span.textContent = tarefa.value;

        // Ícone de exclusão
        const trashIcon = document.createElement("i");
        trashIcon.className = "fa-solid fa-trash-can close";

        // Evento para remover o item ao clicar no ícone de exclusão
        trashIcon.addEventListener("click", function () {
            li.remove();
        });

        // Montar o item
        li.appendChild(checkIcon);
        li.appendChild(span);
        li.appendChild(trashIcon);

        // Adicionar o item à lista
        lista.appendChild(li);

        // Limpar o campo de texto
        tarefa.value = "";
    }
});