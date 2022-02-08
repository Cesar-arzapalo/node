const { tabla_multiplicar } = require('./helpers/multiplicar');
const { escribir_archivo_sincronico } = require('./helpers/manejo_archivos');

const argv = require('./config/yargs');


guardar_tablas_de_multiplicar = (factor, desde, hasta,listar) =>{
    if(listar){
        console.log(tabla_multiplicar(factor,desde,hasta,'').consola);
    }
    return escribir_archivo_sincronico(`tabla del ${factor}`,tabla_multiplicar(factor,desde,hasta,'').salida);
};

guardar_tablas_de_multiplicar(argv.base,argv.desde,argv.hasta,argv.l)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
