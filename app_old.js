const http = require('http');

http.createServer((req, res) => {;
        res.writeHead(200, { 'Content-Type': 'application/json' }); //Estructura de la salida.

        let salida = {
            nombre: 'Jonatan',
            edad: 30,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080')