const { exec } = require('child_process');
const util = require('util');

// Promisificamos 'exec' para poder usarlo con async/await
const ejecutarAsincronicamente = util.promisify(exec);
const listaDeScripts = ['ms.js', 'mac.js', 'maptc.js', 'mapaa.js'];

/**
 * Ejecuta un script Node.js usando 'exec' y muestra su salida o error.
 * @param {string} script - El nombre del script a ejecutar.
 */
async function ejecutarScript(script) {
    console.log(`\n----------------------------------`);
    console.log(`\nEjecutando: ${script}`);
    console.log(`\n----------------------------------\n`);
    try {
        const resultado = await ejecutarAsincronicamente(`node ${script}`);
        
        if (resultado.stderr) {
            console.error(`Advertencia (stderr) en ${script}=>${resultado.stderr}`);
        }

        console.log(`Salida de ${script}=>${resultado.stdout}`);
    } catch (error) {
        console.error(`Error ejecutando ${script}=>${error}`);
    }
}

/**
 * Ejecuta todos los scripts de la lista uno por uno usando funciones asincronicas (async/await) .
 */
async function ejecutarTodosLosScripts() {
    for (const script of listaDeScripts) {
        await ejecutarScript(script);
    }
    console.log('\nTodos los scripts se ejecutaron correctamente.');
}

// Realize este script para probar todos juntos. 
ejecutarTodosLosScripts();
