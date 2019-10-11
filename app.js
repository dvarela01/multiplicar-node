//const fs = require('express'); // paq que se instala
//const fs = require('./propio'); // un archivo propio
/*---------------------------------------------
const multiplicar = require('./multiplicar/multiplicar') // sin destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar') //destruracion
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
let base2 = '5';
//console.log(multiplicar);
//console.log(process.argv);
console.log(base);

crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e))
*/
/*--------------------------- Menu por consola con parametros
const argv = require('yargs').command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


let argv2 = process.argv;
console.log(argv.base);
console.log(`Limite: ${argv.limite}`);
*/
/*utilizando yargs
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar') //destruracion
const argv = require('yargs').command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(data => console.log(data))
            .catch(e => console.log(e));

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
*/
//creando archivo de configuracion para yargs
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //destruracion
const argv = require('./config/yargs').argv; //destruracion
var colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(data => console.log(data))
            .catch(e => console.log(e));

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado:'.yellow + `${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
};