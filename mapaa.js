const fs = require('fs').promises;

/**
 * procesarArchivo
 * 
 * Doble check de errores paa separar escritura de lectura
 * 
 * modo asincrónico con promises (sintaxis async await).
 */
async function procesarArchivo() {
    try {
         // Lea el archivo package.json y declare un objeto con el siguiente formato y datos...
        const contenidoStr = await fs.readFile('./package.json', 'utf-8');
        const stats = await fs.stat('./package.json');
        const contenidoObj = JSON.parse(contenidoStr);

        const informacion = {
            contenidoStr,
            contenidoObj,
            size: stats.size
        };
       
        // Muestre por consola el objeto info luego de leer el archivo.
        console.log(informacion);


        //Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
            try{
                await fs.writeFile('./info.txt', JSON.stringify(informacion, null, '\t'));
                console.log('Modo asincronico (sintaxis async/await): info.txt listo');
            }catch(errorCreacion){
                console.error("Ocurrió el siguiente error:" + errorCreacion)
            }
        //Incluia el manejo de errores.
    } catch (err) {
        console.error('Error en mapaa.js:', err);
    }
}

procesarArchivo();


