const dataType = [];
const newDataType = {};

function verifyDataType(data) {
  Array.isArray(data)
    ? console.log('É um array')
    : console.log('Não é um array');
}
