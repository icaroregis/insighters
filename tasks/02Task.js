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

const string =
  'create table author (id number, name string, age number, city string, state string, country string)';

let database = {
  tables: {
    author: {
      columns: {
        id: 'number',
        name: 'string',
        age: 'number',
        city: 'string',
        state: 'string',
        country: 'string',
      },
      data: [],
    },
  },
};

let teste = JSON.stringify(database);
console.log(teste);
