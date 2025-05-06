const fs = require('fs');

/**
 * 
 * Doble check de errores para separar escritura de lectura
 * 
 * modo asincrónico con callbacks.
 */

 // Lea el archivo package.json y declare un objeto con el siguiente formato y datos...
fs.readFile('./package.json', 'utf-8', (err, contenidoStr) => {
    //Incluia el manejo de errores.
    if (err) return console.error('Error al leer package.json:', err);

    let contenidoObj;
    try {
        contenidoObj = JSON.parse(contenidoStr);
    } catch (parseErr) {
        return console.error('Error al parsear JSON:', parseErr);
    }

    fs.stat('./package.json', (err, stats) => {
        if (err) return console.error('Error al obtener stats:', err);

        const informacion = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };
       
        // Muestre por consola el objeto info luego de leer el archivo.
        console.log(informacion);

        fs.writeFile('./info.txt', JSON.stringify(informacion, null, '\t'), (err) => {
            if (err) return console.error('Error al escribir info.txt:', err);
            console.log('Modo asincrónico callbacks: info.txt listo');
        });
    });
});
