const colors = require('colors');

const tabla_multiplicar = (factor, desde, hasta, salida) =>{
    consola = '';
    consola = colors.magenta(
`===========================
        Tabla del ${factor}
===========================
`);
    salida =
`===========================
        Tabla del ${factor}
===========================
`;
    for(let i = desde; i<= hasta; i++){
        consola += `${colors.blue(`${factor}`)} ${colors.red('x')} ${colors.blue(`${i}`)} ${colors.red('=')} ${colors.blue(`${factor*i}`)}`;
        consola += (i!= hasta)?'\n':'';
        salida += `${factor} x ${i} = ${factor*i}`;
        salida += (i!= hasta)?'\n':'';
    }
    return { salida: salida+='\n', consola: consola+='\n'};
};

module.exports = { tabla_multiplicar };