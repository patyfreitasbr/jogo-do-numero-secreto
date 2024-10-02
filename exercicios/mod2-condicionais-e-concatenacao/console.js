alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 7;

// console verigfica valor chute
let chute = prompt('Escolha um número entre 1 e 10');
console.log (numeroSecreto)



//se chute for igual a numero secreto
if (numeroSecreto == chute) {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}`);
}

else {
    alert('Você errou :( ')
}