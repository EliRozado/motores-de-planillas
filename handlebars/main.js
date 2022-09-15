const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}));

app.set('view engine', 'hbs');
app.set('views', './views');

const prodRouter = require('./productos.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/productos', prodRouter)

app.listen(8080, () => {
    console.log('init in '+8080)
})