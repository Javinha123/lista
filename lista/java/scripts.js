function exercicio1(){
    for (let i=1; i <=10; i++){
        alert(i)
    }
}

// 2

function exercicio2(){
    let numero = prompt("Digite um número:"); 
    numero = parseInt(numero)

    for(let i = 0; i <= numero; i ++){
        if(i % 2 == 0){
            alert(i);
        }
    }
}

// 3

function exercicio3(){
    let numero = prompt("Digite um numero:")
    numero = parseInt(numero);
    primo = true;
    for(let i= 2; i < numero; i++ ){
        if(numero % i == 0){
            primo = false;
        }
    }
    if(primo){
        alert('primo')
    }else{
        alert('não é primo')
    }
}

// 4

function exercicio4(){
    let numero = prompt('Digite um numero:')
    numero = parseInt(numero)
    let tabuada = numero;

    for( i = 1; i <=10; i++){
        console.log(numero, "x", i, "=", tabuada * i)
    }
}

// 5

function exercicio5(){
    let numero = prompt('digite o numero');
    numero = parseInt(numero);
    let i = 0;
    while(i <= numero){
        if(i % 2 != 0){
            alert(i)
        }
        i++
    }

}

// 6

function exercicio6(){
    let numero = prompt('Digite um numero:')
    numero = parseInt(numero)
    let soma = 0

    let i = 0
    while(i <= numero){
        if(i % 2 ==0){
            soma = soma + i
        }
        i++
    }
    alert(soma)
}

// 7
function exercicio7(){
    let i = 10
    while(i >= 0){
        if(i >= 0){
            alert(i)
        }
        i--;
    }
}



// 8

function exercicio8(){
    let palavra = prompt("Digite uma palavra")
    let inversa = ''
    for(let i = 1; i <= palavra.length; i++){
        inversa = inversa + palavra.charAt(palavra.length - i)
    }
    if(palavra == inversa){
        console.log("É palindromo")
    } else{
        console.log("Não é polindromo")
    }
}

// 9

function exercicio9(){

    let numero = 100;
    let soma =0;

    for(let i = 1; i <= 100; i++){
        soma = soma + i

    }
    alert(soma);
}

// 10

function exercicio10(){

    let numero = parseInt(prompt("Digite um numero (Zero Para Sair);"))
    let soma = 0
    let cont = 0 
    let media = 0
    while(numero != 0){
        soma = soma  + numero
        cont = cont + 1
    } 
    console.log(cont)
    
}

// 11

function exercicio11(){
    for(let i = 0; i < 100; i ++){
        if(i %3 == 0){
            alert(i)
        }
    }
}

// 12

function exercicio12(){
    let digito = prompt("Digite seu numero")
    let soma = 0

for(let i = 0; i < digito.length; i++){
    soma = soma + parseInt(digito[i])
}
console.log(soma)
} 

//  13

function exercicio13(){

    let numero1 = prompt("Primeiro Número")
    let numero2 = prompt("Segundo Número")
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)

    for(let i = numero1; i <= numero2; i++){
        if(verificarprimo(i)){
            alert(i, "é primo")

        }
        }
    }

function verificarprimo(num1){
    num1 = parseInt(num1)
    for(let i = 1; i < num1; i++){

        if((num1 % 2 != 0) || (num1 == 2)){
            return true
        }else {
            return false
        }
    }
}
// 14

function exercicio14(){

}

// 16

function exercicio16(){
    let r = parseFloat(prompt("Valor do raio:"))
    let a = 2 * 3.14159 * r
    alert("A área do cirulo é:" + a)
}

// 17

function exercicio17(){
    let base = prompt('defina o valor da base de um triângulo');
    let altura = prompt('defina o valor da altura de um triângulo');
    base = parseInt(base);
    altura = parseInt(altura);
    let valores = altura * base;
    let areaTri = valores / 2;
    alert(areaTri);
}

// 18

function exercicio18(){
    let baseMaior = prompt('defina o valor da base maior de um trapézio');
    let baseMenor = prompt('defina o valor da base menor de um trapézio');
    let altura = prompt('defina o valor da altura de um trapézio');
    baseMaior = parseInt(baseMaior);
    baseMenor = parseInt(baseMenor);
    altura = parseInt(altura);
    let valores1 = baseMaior + baseMenor;
    let valores2 = valores1 / 2;
    let areaT = valores2 * altura;
    alert(areaT);
}


function exercicio21() {
    let frase = prompt("Digite uma frase\n");
    let nw = frase.replace(/ /gi, '');
    let contem = nw.includes(' ');
    while (contem == true) {
        if (contem == true) {
            let nw = frase.replace(' ', '');
        }

    }
    alert(nw);
}

function exercicio22() {

    let soma = 0;
    while (soma <= 100) {
        let p = prompt("Escreva um número");
        p = parseFloat(p)
        soma = soma + p;

    } alert(soma)
}

function exercicio23() {
    let l = prompt('Escreva uma palavra');
    let p = prompt('Escreva uma frase');

    let nrVezes = p.match(new RegExp(l, 'gi'));
    alert(nrVezes.length)

}

function exercicio24() {
    let palavra = '';
    let frase = prompt("Digite uma frase\n");
    let vetor = frase.split(" ");
    for (let i = 0; i < vetor.length; i++) {
        let p = vetor[i];
        let vg = p[0];
        let nw = p[0].toUpperCase() + p;
        let nw2 = nw.replace(vg, '');
        palavra += nw2 + " ";
    }
    alert(palavra);

}

function exercicio25() {
    let maior = 0;
    let meio = 0;
    let menor = 0;
    let n1 = prompt("Digite um número");
    let n2 = prompt("Digite outro número");
    let n3 = prompt("Digite outro número");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);

    if (n1 > n2 && n2 > n3 && n1 > n3) {
        maior = n1;
        meio = n2;
        menor = n3;
    }
    if (n2 > n1 && n1 > n3 && n2 > n3) {
        maior = n2;
        meio = n1;
        menor = n3;
    }
    if (n3 > n2 && n2 > n1 && n3 > n1) {
        maior = n3;
        meio = n2;
        menor = n1;
    }
    if (n1 > n3 && n3 > n2 && n1 > n2) {
        maior = n1;
        meio = n3;
        menor = n2;
    }
    if (n2 > n3 && n3 > n1 && n2 > n1) {
        maior = n2;
        meio = n3;
        menor = n1;
    }
    if (n3 > n1 && n1 > n2 && n3 > n2) {
        maior = n3;
        meio = n1;
        menor = n2;
    }
    if (n1 == n2 && n1 == n3 && n2 == n3) {
        maior = n1;
        meio = n2;
        menor = n3;
    } alert(menor);
    alert(meio);
    alert(maior);
}



