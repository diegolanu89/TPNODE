# Proyecto Node.js: Lectura y procesamiento de package.json

Este proyecto implementa cuatro scripts en Node.js que realizan las siguientes acciones:

1 - Leen el archivo `package.json`.  
2 -  Construyen un objeto `info` con:
- El contenido del archivo como string (`contenidoStr`).
- El contenido parseado como objeto (`contenidoObj`).
- El tamaño en bytes del archivo (`size`).

4  - Muestran por consola el objeto `info`.  
5  - Guardan ese objeto en un archivo `info.txt` dentro de la misma carpeta.

---

## Estructura

El proyecto incluye cuatro variantes, cada una usando una técnica distinta:

- `ms.js` → modo sincrónico (`fs.readFileSync`).  
- `mac.js` → modo asincrónico con callbacks.  
- `maptc.js` → modo asincrónico con Promises (`then/catch`).  
- `mapaa.js` → modo asincrónico con Promises (`async/await`).

Además, incluye el script:

- `runAll.js` → ejecuta los cuatro scripts uno por uno usando `await`, mostrando sus resultados en consola.

---

Ejecuta el comando:
```bash
npm test
