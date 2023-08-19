/*
7 TIPOS DE DADOS
Todos são primitivos exceto os objetos.
 */
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//VERIFICAR TIPO DE DADO usando o typeof
var nome = 'André';
console.log('essa variavel é do tipo = ', typeof nome);
// retorna string


//Você pode somar uma string e assim concatenar as palavras.
var nome = 'Henrique';
var sobreNome = 'Silverio';
var nomeCompleto = nome + ' ' + sobreNome;

console.log(nomeCompleto)

//Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(frase);


//TEMPLATE STRING para concatenar Você deve passar expressões / variáveis dentro de ${}

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String


console.log(frase2);

// Declare uma variável contendo uma string
var nameMyWife = 'Livia';

// Declare uma variável contendo um número dentro de uma string
var anos = 1.5;
var anosTexto = '30';
var timeProfession = `Eu sou programador a ${anos} anos`;
console.log(timeProfession);
console.log(typeof anos);
// Declare uma variável com a sua idade
var myAge = 30;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var myFirstName = 'Henrique';
var myLastName = 'Silvério';
var myFullName = `${myFirstName} ${myLastName}`;
console.log('FULL NAME ->', myFullName);
// Coloque a seguinte frase em uma variável: It's time
var faseEx = "It's time";
console.log(faseEx);
// Verifique o tipo da variável que contém o seu nome
console.log('tipo da variável que contém o meu nome ->', typeof myFullName);