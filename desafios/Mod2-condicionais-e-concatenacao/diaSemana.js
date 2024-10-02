


let diaSemana = prompt('Qual é o dia da semana?');
console.log (diaSemana)

//Compara se chute  foi igual numero secreto
console.log('Resultado da comparação:', chute == numeroSecreto);

//se chute for igual a numero secreto
if (numeroSecreto == chute) {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}`);
}


else {
    //verifica o numero digitado quando erra
    console.log('Valor digitado: ', chute );

    alert('Você errou :( ')
}