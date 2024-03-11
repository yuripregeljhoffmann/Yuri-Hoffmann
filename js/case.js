var num1 = 54;
var num2 = 10;
var result = 0;
var opera = 3;

function soma()
{
    result = num1+num2
    console.log(result);
}
function subt()
{
    result = num1-num2
    console.log(result);
}
function divisao()
{
    result = num1/num2
    console.log(result);
}
function multiplicacao()
{
    result = num1*num2
    console.log(result);
}

switch(opera){
     case 1:
     soma();
     break;
    
     case 2:
     subt();
     break;
     
     case 3:
     divisao();
     break;

     case 4:
     multiplicacao();
     break;

     default:
    alert("Erro. Número de operação inválida");



}