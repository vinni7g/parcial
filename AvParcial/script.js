// --------------------------------
// Nome do arquivo: script.js
// Descrição: arquivo de script para o jogo de adivinhação.
// Autores:
//  Nome integrante 1 - RGM: 10101010
//  Nome integrante 2 - RGM: 20202020
//  Nome integrante 3 - RGM: 30303030
// --------------------------------



// Parte 1 (1 ponto)

// Capture os elementos com name="dificuldade" e id="btnCriarJogo" e atribua-os à variáveis.
// Quando o usuário clicar no botão "Criar Jogo", dispare a função "ajustaDificuldade()".
// Declare a variável global "maxTentativas" e atribua o valor 0.
// Declare a função "ajustaDificuldade()".
// Na função "ajustaDificuldade()":
// - Crie uma estrutura condicional para verificar qual nível de dificuldade foi selecionado pelo usuário. 
// - Ajuste o valor da variável "maxTentativas" na estrutura condicional de acordo com o nível de dificuldade selecionado pelo usuário.
// -- Se o usuário selecionar o nível "Fácil", atribua o valor 10 à variável "maxTentativas".
// -- Se o usuário selecionar o nível "Médio", atribua o valor 7 à variável "maxTentativas".
// -- Se o usuário selecionar o nível "Difícil", atribua o valor 5 à variável "maxTentativas".
// - Crie outra estrutura condicional para verificar se o valor da variável "maxTentativas" é maior que 0.
// -- Se o valor da variável "maxTentativas" for maior que 0, execute a função "novoJogo()".
// -- Senão, exiba um alerta para o usuário indicando a necessidade de selecionar um nível de dificuldade.
//
// Dicas: 
// - Use a propriedade checked para verificar se um elemento do tipo radio foi selecionado.

let niveisDificuldade = document.getElementsByName('dificuldade');
let butao = document.getElementById('btnCriarJogo');
butao.addEventListener("click", ajustaDificuldade);
let maxTentativas = 0;
function ajustaDificuldade(){
 for (let i = 0; i < niveisDificuldade.length; i++){
   if(niveisDificuldade[i].checked){
     if(niveisDificuldade[i].value === 'facil'){
       maxTentativas = 10;
       }
       else if(niveisDificuldade[i].value === 'medio'){
      maxTentativas = 7;
      }
      else if(niveisDificuldade[i].value === 'dificil'){
        maxTentativas = 5;
        }
        break;
   }
  
 }
 if (maxTentativas > 0){
    novoJogo();
  }
  else{
    alert("Selecione a dificuldade")
  }
 
}


// Parte 2 (0.5 ponto)
// -------------------
// Declare uma variável global "numeroSecreto".
// Declare uma variável global "tentativas".
// Declare a função "novoJogo()".
// Na função "novoJogo()": 
// - reatribua o valor 0 à variável "tentativas".
// - atribua um número aleatório entre 1 e 100 à variável "numeroSecreto". 
//
// Dicas:
// - Utilize o método Math.floor() para arredondar o número gerado pelo método Math.random().
// - Utilize o método Math.random() para gerar um número aleatório entre 0 e 1. Multiplique o número gerado por 100 para gerar um número aleatório entre 0 e 100.


let numeroSecreto;
let tentativas;

function novoJogo(){
tentativas = 0;
numeroSecreto = Math.floor(Math.random()*100)+1;


let oi = console.log("Número secreto gerado: " + numeroSecreto);
}



// Parte 3 (1.0 ponto)
// -------------------
// Capture os elementos de ids "entrada", "btnEnviarPalpite" e "saida" e atribua-os à variáveis.
// Quando o usuário clicar no botão "Enviar Palpite", dispare a função "avaliaPalpite()".
// Na função "avaliaPalpite()", verifique se o palpite do usuário é igual, maior ou menor ao número secreto. 
// Se for igual, exiba uma mensagem de parabéns e o número de tentativas que o usuário utilizou para acertar o número secreto. 
// Se for menor, exiba uma mensagem informando que o usuário deve tentar um número maior. 
// Se for maior, exiba uma mensagem informando que o usuário deve tentar um número menor.
//
// Dicas:
// - Reatribua o valor da variável "tentativas" a cada execução da função "avaliaPalpite()". 
// - Declare uma variável global "numerosDigitados" e atribua o valor de um array vazio.
// - Na função avaliaPalpite(), armazene cada palpite em um elemento do array "numerosDigitados".

let ent = document.getElementById('entrada');
let envio = document.getElementById('btnEnviarPalpite');
let exit = documento.getElementById('saida');

envio.addEventListener("click", avaliaPalpite);

function avaliaPalpite(){
    if(entrada === numeroSecreto){
        alert("Que sorte! Meus parabéns, você acertou!")
    }
    else if(entrada < numeroSecreto){
        alert("Poxa! Tente um número maior.")
    }
    else if(entrada > numeroSecreto){
        alert("Poxa! Tente um número menor.")
    }
}


// Parte 4 (0.5 ponto)
// -------------------
// Imprima a sequência de palpites digitados, assim como o número de tentativas. 
// Exiba os palpites do usuário no elemento com id "palpites".

function exibirPalpites(palpite) {
    var elementoPalpites = document.getElementById('palpites');
    elementoPalpites.innerHTML += "<p>Palpite: " + palpite + "</p>";
    tentativas++;
    elementoPalpites.innerHTML += "<p>Número de tentativas: " + tentativas + "</p>";
}


// Parte 5 (Não fornece pontuação)
// Exiba a div de id "blocoInicial" e oculte a div de id "blocoJogo" quando a página for carregada.
// Dicas:
// - Utilize no escopo global o método display para ocultar e exibir as divs. 
// Por exemplo, elemento.style.display = "none"; para ocultar e elemento.style.display = "block"; para exibir o elemento.




// Parte 6 (Não fornece pontuação)
// Após o usuário selecionar um nível de dificuldade e clicar no botão "Criar Jogo", oculte a div de id "blocoInicial" e exiba a div de id "blocoJogo". Ou seja, o processo inverso ao carregamento da página.
// Após o usuário acertar o número secreto ou atingir o limite de tentativas, reinicie o jogo. Para isso, crie uma função reinicia() e execute-a após o usuário acertar o número secreto ou atingir o limite de tentativas.
// A função reinicia() deve ser executada após 5 segundos o usuário ter acertado ou acabado com as tentativas. Exiba a div de id "blocoInicial" e oculte a div de id "blocoJogo". Ou seja, o processo similar ao carregamento da página.



