// const boolTrue = true;
// const boolFalse = false;

// const boolTrueFunc = new Boolean(true);
// const boolFalseFunc = new Boolean(false);

// let condition = true;

// if (condition) {
//   console.log("the condition is true");
// } else {
//   console.log("the condition is false");
// }

// let condition = new Boolean(false);

// if (condition) {
//   console.log("the condition is true");
// } else {
//   console.log("the condition is false");
// }

// coersão de tipo

// somente esses valores dos tipos de dados retornam falso

// !!0
// !!NaN
// !!""
// !!false
// !!undefined
// !!null

// todos os outros retornam true

// !!-10;
// !!"javascript";
// !!{}
// !![]
// !!/"javascript"/
// !!new Dates();
// !!function() {}

// operadores booleans

// operadores de comparação

// ==, ===, !=, !==, >, <, >=, <=

// toma cuidado == e !=

// 0 == ''

// operadores lógicos

// !, ||, &&

// operador ternario

// (condition) ? 'good' : 'bad';

// if (condition) {
// return 'good'
// } else {
// 'bad'
// }

// regexp
// const email = 'matheus@insighter.academy';

// const regexp = /matheus@insighter.academy/;

// const result = regexp.test(email);

// console.log(result);

// metecaracteres
// . (ponto), \ (barra invertida)

// let regexp = /insighters@insighter\.academy/;

// let result = regexp.exec("insighters@insighter.academy");

// console.log(result);

// \w: representa o conjunto [a-zA-Z0-9_]
// \W: representa o conjunto [^a-zA-Z0-9_]
// \d: representa o conjunto [0-9]
// \D: representa o conjunto [^0-9]
// \s: representa um espaço em branco
// \S: representa um não espaço em branco
// \n: representa uma quebra de linha
// \t: representa um tab

// grupo de caracteres

// [abc]

// let regexp = /^[a-z][a-z][a-z][a-z]@insighter\.academy/;
// // abcdefgij
// // ABCDEFGHIJ

// let result = regexp.exec("jon@insighter.academy");

// console.log(result);

// quantificadores

// {n}
// {n,}
// {n,m}
// ? (zero ou um)
// * (zero ou mais)
// + (um ou mais)

// let regexp = /^[a-z]+@insighter\.academy/;

// let result = regexp.exec("matheus@insighter.academy");

// console.log(result);

// grupo de captura

// ()

let regexp = /(\w+)@(\w+)(\.\w{2,7}),/;

let result = regexp.exec("tess@insighter.academy,matheus@linkapi.com");

console.log(result);
// console.log(result[1]);
// console.log(result[2]);
// console.log(result[3]);
