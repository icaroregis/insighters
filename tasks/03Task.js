// Crie dois métodos no objeto **database** chamados de **createTable** e **execute**. O comando **createTable** já foi implementado no exercício anterior, mova o código e utilize o método **execute** para invocar dinamicamente o método **createTable**.

// # Instruções

// 1. No objeto **database**, crie uma função chamada **createTable**, que recebe o comando por parâmetro.
// 2. Mova o código responsável por criar a tabela para dentro do método **createTable**.
// 3. Crie uma função chamada **execute**, invocando dinamicante a função **createTable**.

//   let database = {
//     tables: {
//       [tableName]: {
//         columns: transformarEmObject,
//         data: [],
//       },
//     },
//   };
// }

//task 03
let database = {
  tables: {
    [tableName]: {
      columns: transformarEmObject,
      data: [],
    },
  },
  creatorTable(statement) {
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
    function creatorTable() {
      let transformarEmObject = Object.assign(
        ...resultColums.map((column) => {
          const object = column.split(' ');
          let propriedade = object[0];
          let valor = object[1];
          return { [propriedade]: valor };
        }),
      );
    }
  },
  execute(statement) {
    this.creatorTable(statement);
  },
};

console.log(database.execute);
