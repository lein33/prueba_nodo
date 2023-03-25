const {crearTabla} = require('./helpers/tablas')
const colors = require('colors');
const argv = require('./config/yargs')
console.clear()

const numero = argv.base;

crearTabla(numero, argv.l)
    .then(nameArchivo=> console.log(nameArchivo.rainbow,'creada por el fichero'))
    .catch(err => console.log(err));
 