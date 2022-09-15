const express = require("express")
const app = express()
const { Router } = express;

const router = Router();
const productos = [];

router.get('/', (req, res) => {
    // devuelve todos los productos
    res.render('productos', { productos })
})

router.get('/agregar', (req, res) => {
    // render formulario
    res.render('form')
})

router.post('/', (req, res) => {
    // recibe y agrega un producto, y lo devuelve con su id asignado
    const { title, price, thumbnail } = req.body

    const producto = {
        title: title,
        price: price,
        thumbnail: thumbnail
    }

    if(productos.length){
        producto.id = productos[productos.length-1].id + 1
    }else{
        producto.id = 1
    }

    productos.push(producto)

    res.render('productos', {productos})
})

module.exports = router;