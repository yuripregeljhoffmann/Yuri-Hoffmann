//criar um codigo que tenha 3 variaveis (num1/num2/opera) as variaveis num1 e num 2 receberão numeros,a variavel OPERA  recebera:
//1=soma \2=subtracao\3=multiplicacao\4=divisao
//Criar funcao para cada operacao



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
if (opera == 1)
{
    soma();
}
else if (opera == 2)
{
    subt();
}
else if (opera == 3)
{
    divisao();
}
if (opera == 4)
{
    multiplicacao();
}
