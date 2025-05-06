const fs = require('fs');

/**
 * 
 * Doble check de errores paa separar escritura de lectura
 * 
 * modo sincrónico.
 */

try {
     // Lea el archivo package.json y declare un objeto con el siguiente formato y datos...
    const contenidoStr = fs.readFileSync('./package.json', 'utf-8');
    const contenidoObj = JSON.parse(contenidoStr);
    const stats = fs.statSync('./package.json');
    
    const informacion = {
        contenidoStr,
        contenidoObj,
        size: stats.size
    };
   
    // Muestre por consola el objeto info luego de leer el archivo.
    console.log(informacion);

    //Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
    try{
        fs.writeFileSync('./info.txt', JSON.stringify(informacion, null, '\t'));
        console.log('Modo sincrónico: info.txt listo'); 
    }catch(errorCreacion){
        console.error("Ocurrió el siguiente error:" + errorCreacion)
    }

    //Incluia el manejo de errores.
} catch (error) {
    console.error('Error durante lectura en ms.js:', error);
}
