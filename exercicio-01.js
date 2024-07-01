// calcular IMC

var peso =  parseFloat(prompt("Qual é o peso em kg?"));
var altura = parseFloat(prompt("Qual a sua altura?"));
var imc = peso / (altura * altura)


if ( imc < 18.5) {
    alert("O IMC indica baixo peso. ");
} else if (imc >= 18.5 && imc <= 24.5) {
    alert("O IMC indica peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    alert("O IMC indica sobrepeso");
} else {
    alert("indica obesidade");
}
console.log(imc)