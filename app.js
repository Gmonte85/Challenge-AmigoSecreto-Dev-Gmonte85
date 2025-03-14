//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim().toLowerCase();
    let listaAmigos = document.getElementById("listaAmigos");

    if (nome !== "") {
        // Verifica se o nome já está na lista
        let nomesExistentes = Array.from(listaAmigos.children).map(li => li.textContent.toLowerCase());
        
        if (!nomesExistentes.includes(nome)) {
            let li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
            input.value = "";
        } else {
            alert("Este nome já foi adicionado.");
        }
    } else {
        alert("Por favor, digite um nome antes de adicionar.");
    }
}

function sortearAmigo() {
    let lista = document.querySelectorAll("#listaAmigos li");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (lista.length > 0) {
        // Sorteia um nome e remove da lista
        let index = Math.floor(Math.random() * lista.length);
        let sorteado = lista[index].textContent;
        lista[index].remove();

        let li = document.createElement("li");
        li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
        resultado.appendChild(li);
    } else {
        alert("Adicione pelo menos um amigo antes de sortear.");
    }
}