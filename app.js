//Forma 1: Sin desestructurar

//const multiplicar = require('./multiplicar/multiplicar');

//let base = 4;

//multiplicar.crearArchivo(base)
//    .then(archivo => { console.log(`Archivo creado: ${archivo}`) });



//Forma 2: Con destructuración

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo creado: ${archivo}`) })
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}
// let base = '1';

// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv);
// console.log(argv2);