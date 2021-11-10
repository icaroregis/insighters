const dataType = [];
const newDataType = {};

function verifyDataType(data) {
  if (Array.isArray(data)) {
    console.log('É um array');
  } else {
    console.log('Não é um array');
  }
}
