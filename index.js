const express = require('express');
const app = express();
const morgan=require('morgan');
app.use(morgan('combined'));
app.use(morgan('dev'));


app.set('puerto',4000);

app.use(express.json());

app.get('/misitio', (req, res) => {
    res.send('Bienvenido a mi sitio web');
});



app.get('/misitio/gastos', (req, res) => {
    res.send('<h1>Gastos del usuario</h1>');
    res.json({
        gasto: 'Salud',
        monto: 14575.60,
        informacion: 'Corresponde a consultas médicas, pagos de seguros, medicinas'
    });

});

app.post('/misitio/calculo', (req, res) => {
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});

app.get('/misitio/gastos/vivienda', (req, res) => {
    res.send('<h1>Vivienda</h1>');
});

app.get('/misitio/gastos/salud', (req, res) => {
    res.send('<h1>Salud</h1>');
});

app.get('/misitio/calculo', (req, res) => {
    res.send('<h1>Calculo de los gastos</h1>');
});

app.get('/misitio/usuarios', (req, res) => {
    res.send('<h1>Usuarios</h1>');
});

app.get('/misitio/about', (req, res) => {
    res.send('<h1>Acerca de nosotros</h1>');
    console.log('Ruta Recibida ' + req.protocol + '://' + req.get('host') + req.originalUrl);
});


app.post('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});

app.put('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Datos del usuario ' + req.params.id + ' actualizados');
});

app.delete('/misitio/usuario/:id', (req, res) => {
    res.send('Usuario ' + (req.params.id) + ' borrado');
});

app.get('/',(req,res)=>{
    res.render('index.ejs');
})
   
//Midlewares 
app.use(express.static('public'));


//Settings
app.listen(app.get('puerto'), ()=>{
    console.log('Nombre de la App',app.get('nombreApp'));
    console.log('Puerto del servidor',app.get('puerto'));
})

app.set('nombreApp','Aplicacion para manejo de gastos SRI');
app.set('puerto',4000);
app.set('view engine','ejs');