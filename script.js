const likes = document.querySelectorAll("button"); // crei um variavel chamado "likes" e fiz ele ser relacionado a os dois botões
likes.forEach(function (like) { //fiz que por cada botão que tem a função "like" tenha essa ação
    let curtiu = false; //fazer uma variavel chamado "curtiu" e deixa como falso.

    like.addEventListener("click", botaoclicado);  // adicionei um evento á essa função para dar uma ação se o botão ser clicado, fazendo uma outra função a esse evento.

    function botaoclicado() {
        console.log("botao apertado");// essa função vai mandar uma mensagem para o console, dizendo que foi apertado.
        let texto = like.querySelector("span");// fiz um outro variavel chamado "texto" e relacionei ele com o numero de likes dentro de span.
        if (curtiu === false) {
            texto.textContent++;// faz que o numero adiciona 1.
            curtiu = true; // depois, é tornado o variavel de antes em verdadeiro, ou "true"
        } else {
            texto.textContent--// faz que o numero subtrai 1.
            curtiu = false; // torna "curtiu" em falso.
        }
    }
});