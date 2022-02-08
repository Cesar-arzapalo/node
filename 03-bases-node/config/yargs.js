const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('d',{
                    alias: 'desde',
                    type: 'number',
                    default: 1,
                    describe: 'limite inferior en el cual comienza el factor de la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'limite superior en el cual termina el factor de la tabla'
                })
                .check( (argv,options) => {
                    if(isNaN(argv.b)){
                        throw 'la base es requerida';
                    }
                    return true; 
                })
                .argv;

module.exports = argv;