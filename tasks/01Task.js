// Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em variáveis.

// # Instruções

// Dado o comando (uma *string*):

// create table author (id number, name string, age number, city string, state string, country string)

// ```
// create table author (id number, name string, age number, city string, state string, country string)
// ```

// 1. Extraia o nome da tabela e armazene em uma variável chamada **tableName.**
// 2. Extraia as colunas da tabela e armazene em uma variável chamada **columns.**
// 3. Manipule a variável **columns**, separando cada coluna com seu respectivo tipo, em uma string separada.

const dataTable =
  'create table author (id number, name string, age number, city string, state string, country string)';

//1 questão
// const tableName = dataTable.substring(13, 19);
// console.log(tableName);

const regex = /([a-z]+) \((.+)\)/;
const result = regex.exec(dataTable);
const tableName = result[1];
console.log(tableName);

//2 questão
// const columns = dataTable.split(/\(.\)/);
// console.log(columns);

const columns = result[2];
const resultColums = columns.split(', ');
console.log(resultColums);

//3questão
