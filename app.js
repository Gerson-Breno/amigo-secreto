let listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }
    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const sorteado = listaAmigos[indiceSorteado];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}