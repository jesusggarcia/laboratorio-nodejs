const express = require('express');
const app = express();


app.get('/jesus',(req, res)=>{
    res.send('Hola Mundo jesus');
});

app.get('/',(req, res)=>{
    res.send('Hola Mundo');
});

app.listen(3000,()=>{
    console.log('Aplicacion escuchando en el puerto 3000');
});
