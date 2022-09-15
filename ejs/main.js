const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const prodRouter = require('./productos.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/productos', prodRouter)

app.listen(8080, () => {
    console.log('init in '+8080)
})