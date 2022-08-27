
//Loppings

//Usando o For

let i = 0;

for(i = 1; i < 11; i++){
    console.log ("número da linha com for " + i) ;
}

console.log("<br>")

i = 1;

//usando o while

while  (i <= 10){
    console.log("Número da linha com While:" + i);
    i++;
}

console.log("<br>")

//Usando o Do While

i = 0;

do{
    i++;
    console.log("Número da linha com Do: " + i)
    } while (i < 10);

console.log("<br>")

//condicionais

    //Usando o if else
let a = 5;
let b = 3;

if (a > b){
console.log("A é maior que b");
}
else {
    console.log("a é menor que b");
}

console.log("<br>")
//usando o Switch
switch (45){
    case 0 :
    console.log("domingo");
    break;
    case 1 :
    console.log ("segunda");
    break;
    case 2:
    console.log ("terça");
    break;   
    case 3:
    console.log ("quarta");
    break;   
    case 4:
    console.log ("quinta");
    break;   
    case 5:
    console.log ("sexta");
    break;   
    case 6:
    console.log ("sábados");
    break;   
    default:
        console.log("número inválido")
}

console.log("<br>");

//Operador Ternário

let x = 1;
let y = 2;

let resultado = x > y ? "x é maior" : x==y ? 'x é igual' : 'x não é maior';
console.log(resultado);
console.log("<br>")

//exercício de ternário

let sexo = "f"

let genero = sexo == "h"  ? 'é homem': 'não é homem';
console.log (genero);

//exercício de ternário 2

let dia = parseInt(prompt("digite um dia do mês"));

let par = dia%2 == 0 ? 'é par': 'é impar';
console.log(par);

//Coalescente ??
let coisa;
let variavel = coisa ?? 'Não há';
console.log(variavel);

