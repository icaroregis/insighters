// Dado o comando (uma *string*):

// ```
// create table author (id number, name string, age number, city string, state string, country string)
// ```

// 1. Crie um objeto chamado **database**.
// 2. Dentro do objeto **database**, crie um objeto chamado **tables**.
// 3. Dentro do objeto **tables**, crie um objeto com o nome da tabela.
// 4. Dentro do objeto criado com o nome da tabela, crie um objeto chamado **columns**.
// 5. Dentro do objeto criado com nome da tabela, crie um array chamado **data**.
// 6. Exiba o conteúdo do objeto **database** utilizando *JSON.stringify*

//for of array
//for in para objeto

//task01
const dataTable =
  'create table author (id number, name string, age number, city string, state string, country string)';

const regex = /([a-z]+) \((.+)\)/;
const result = regex.exec(dataTable);
const tableName = result[1];
console.log(tableName);

const columns = result[2];
const resultColums = columns.split(', ');
console.log(resultColums);

//task02
const transformarEmObject = Object.assign(
  ...resultColums.map((column) => {
    const object = column.split(' ');
    let propriedade = object[0];
    let valor = object[1];
    return { [propriedade]: valor };
  }),
);

//ou
// for (let resultColums of column) {
//   resultColums.split(' ');
//   let propriedade = object[0];
//   let valor = object[1];

//   database.tables[tableName].columns[propriedade] = valor;
// }

let database = {
  tables: {
    [tableName]: {
      columns: transformarEmObject,
      data: [],
    },
  },
};

let transformarEmJson = JSON.stringify(database, undefined, 2);
console.log(transformarEmJson);
