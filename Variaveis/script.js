//Variáveis Responsáveis por guardar dados na memória. Inicia com a palavra var, let ou const
var nome = 'André';
let idadeEx = 28;
const possuiFaculdadeEx = true;


//Palavra chave var seguida do nome, sinal de igual e o valor.
var nome = 'Henrique';
var idade = 30;
var possuiFaculdade = true;

// console.log(nome, idade, possuiFaculdade);

//Evitam repetições DRY (Don't repeat yourself)
var preco = 25;
var totalComprado = 5;
var valorFinal = preco * totalComprado;

// console.log(valorFinal);

//Utilizando a virgula para criar mais de uma variavel, sem repetir a palavra chave var.
var sobrenome = 'Silverio',
  cidade = 'uberlandia';

// console.log(sobrenome, cidade);

//Declaracao sem atribuir valor inicialmente
var precoAplicado;

// Inválido
/*
var §nome;
var function;
var 1possuiFaculdade;
*/


// Válido
var $selecionar; //Variavel principal do jQuery
var _nome;
var possuiFaculdadeNoExterior;

// console.log(semDefinicao);
// retorna nome is not defined


/*
Mudar o valor atribuído
É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

*/
var idade = 28;
idade = 29;

let precoLet = 50;
precoLet = 25;

const possuiFaculdadeConst = true;
// possuiFaculdadeConst = false;
// Retorna um erro



// Declarar uma variável com o seu nome
const myName = 'Henrique';

// Declarar uma variável com a sua idade
const myAge = '30';

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var myFood;
// Atribuir valor a sua comida favorita
myFood = 'hamburguer';
// Declarar 5 variáveis diferentes sem valores


console.log(myName, myAge, myFood)
