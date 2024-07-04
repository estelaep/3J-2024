const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="Olá";
const tempoObjetivo1 = new Date (2025, 03, 15, 15, 00); 
const tempoObjetivo2 = new Date (2027, 11, 29, 23, 00);
const tempoObjetivo3 = new Date (2025, 03, 16, 30, 00);
const tempoObjetivo4 = new Date (2027, 06, 04, 17, 45);
const agora = new Date() 
let segundos;
let minutos;
let horas;
let dias;

segundos = (tempoObjetivo1-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24

segundos=Math.floor(segundos);
minutos=Math.floor(minutos);
horas=Math.floor(horas);
dias=Math.floor(dias);



tempo[0].textContent= `faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;




console.log(tempo);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
