alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 7;
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//Compara se chute  foi igual numero secreto
console.log('Resultado da comparação:', chute == numeroSecreto);

//enquanto chute nao forigual ao numero secreto a n.s
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    //se chute for igual a numero secreto
        if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
        }
       // tentativas = tentativas +1;
        tentativas++;
    }

    }