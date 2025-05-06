const fs = require('fs').promises;


/**
 * 
 * Doble check de errores para separar escritura de lectura
 * 
 * modo promises con callbacks.
 */
fs.readFile('./package.json', 'utf-8')
    .then(contenidoStr => {
         // Lea el archivo package.json y declare un objeto con el siguiente formato y datos...
        return fs.stat('./package.json').then(stats => {
            const contenidoObj = JSON.parse(contenidoStr);
            const informacion = {
                contenidoStr,
                contenidoObj,
                size: stats.size
            };

             // Muestre por consola el objeto info luego de leer el archivo.
            console.log(informacion);

            //Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
            return fs.writeFile('./info.txt', JSON.stringify(informacion, null, '\t'));
        });
    })
    .then(() => {
        console.log('Modo asincronico (then/catch): info.txt listo');
    })
     //Incluia el manejo de errores.
    .catch(err => {
        console.error('Ocurrió el siguiente Error en maptc.js:', err);
    });
