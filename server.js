const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers.js')

const port = process.env.PORT || 3000; //Heroku va a ejecutar desde un puerto que no se cual es, de esta manera lo obtengo para usarlo.

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// app.get('/', (req, res) => { //Cada URL debe configurar '/cuentas', '/clientes'
//     //res.send('Hello World');
//     let salida = {
//         nombre: 'Jonatan',
//         edad: 30,
//         url: req.url
//     }
//     res.send(JSON.stringify(salida));
// })

app.get('/', (req, res) => { //Cada URL debe configurar '/cuentas', '/clientes'
    res.render('home', {
        nombre: 'jona'
    });
})

app.get('/about', (req, res) => { //Cada URL debe configurar '/cuentas', '/clientes'

    res.render('about');
})

app.get('/home', (req, res) => { //Cada URL debe configurar '/cuentas', '/clientes'
    //res.send('Hello World');
    let salida = {
        nombre: 'Jonatan',
        edad: 30,
        url: req.url
    }
    res.send(JSON.stringify(salida));
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});