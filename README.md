# Jogo do número secreto

Bem-vindo ao repositório do Jogo do Número Secreto, um projeto desenvolvido durante o curso "Lógica de Programação do Zero com JavaScript" da <a href="https://www.alura.com.br/" target="_blank">Alura</a>. Neste jogo, o usuário deve adivinhar um número secreto gerado aleatoriamente pelo computador.

[Descrição do Projeto](#descrição-do-projeto) • [Demonstração](#demonstracao) • [Tecnologias Utilizadas](#tecnologias-utilizadas) • [Funcionalidades](#funcionalidades) • [Código Fonte](#codigo-fonte) • [Como Executar o Projeto](#como-executar-o-projeto) • [icença](#licença) • [Contato](#contato) 

## Descrição do Projeto

O jogo consiste em um simples desafio onde o usuário tenta adivinhar um número entre 1 e 5000. O programa fornece dicas informando se o número secreto é maior ou menor do que o chute do usuário. O jogo continua até que o usuário acerte o número, e no final, é exibido o número de tentativas realizadas.

## Demonstração

Acesse para jogar <a href="#"target="_blank">Link Site</a>

![Gif página](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ2Ht_IMbayz1vi5j-xj1qqUBHXHHOFJC8sV-vp_hr4xvWtQ_vJyouvvvBrmQuWhATYoMuVEXz-pnvBIRiJ0Rk3C4JhLA5C4aEcqoYoDhx3g9sop6x3tS3MnhYb2kYPGY5CPThpZfFqsMbws_M6dDekHJEmlrk4J0v69cnXGSd9pDstXi0REWwtFtwajTi/s16000/jogo-numero-secreto.gif)


## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para implementar a lógica do jogo.
- **HTML** e **CSS**: Estruturas já fornecidas que definem a interface do jogo.

## Funcionalidades

- Interação através de prompts e alerts para receber e fornecer feedback ao usuário.
- Estruturas condicionais para lógica de comparação.
- Utilização de loops para permitir tentativas contínuas até a adivinhação correta.
- Geração de um número aleatório com `Math.random()`.

## Código Fonte

Aqui está o código JavaScript implementado para o jogo:

```javascript
alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); // Corrigido o fechamento da string e convertendo o chute para número
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

```

## Como Executar o Projeto

1. Clone este repositório para o seu computador.
2. Abra o arquivo HTML em um navegador.
3. Siga as instruções que aparecerão na tela para jogar.
4. Contribuições
5. Sinta-se à vontade para contribuir com melhorias ou sugestões para o jogo. Pull requests são bem-vindos!

## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

  [![NPM](https://img.shields.io/npm/l/react)](https://github.com/patyfreitasbr/Google-Search-Page-Clone/blob/main/LICENSE)

## Estudos e desafios

| Tipo | Link|
|----|----|
| Desafios|[acesse](https://github.com/patyfreitasbr/jogo-do-numero-secreto/tree/main/desafios)|
|Estudos|[acesso](https://github.com/patyfreitasbr/jogo-do-numero-secreto/tree/main/exercicios/mod2-condicionais-e-concatenacao)|

## Contato

👩‍💻 Patrícia Freitas

📬 brpatyfreitas@gmail.com

 <div><a href="https://www.linkedin.com/in/patyfreitasbr"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></>
  <a href="https://www.instagram.com/patyfreitasbr"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></></div>




