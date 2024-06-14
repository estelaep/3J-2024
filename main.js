const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="olá";
const tempoObjetivo1 = new Date(2025, 03, 15, 15, 0);
const tempoObjetivo2 = new Date(2027, 11, 29, 23, 0);
const tempoObjetivo3 = new Date(2025, 11, 18, 30, 0);
const tempoObjetivo4 = new Date(2027, 06, 04, 17, 20);
const agora = new Date();
TEMPO[1].textContent = agora
for(let i = 0; 1 < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
