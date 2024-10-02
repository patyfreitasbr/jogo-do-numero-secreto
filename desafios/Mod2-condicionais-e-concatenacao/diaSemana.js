//perguntando o dia daa semana
let diaSemana =prompt('Qual é o dia da semana? ');
    
//extra - converter para maiuscula para facilistar comparação
diaSemana =  diaSemana.toLowerCase();

//extra msotra qual dia foi digitado no console
console.log('Dia da semana digitado foi:', diaSemana);

//comparando as escolhas
if (diaSemana === 'sábado' || diaSemana === 'domingo') {
    
    alert('Bom fim de semana!');
}

else {
    alert('Boa semana!');
}



