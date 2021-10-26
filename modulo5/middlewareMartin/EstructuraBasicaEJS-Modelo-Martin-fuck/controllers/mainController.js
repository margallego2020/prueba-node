const listaProductos = [
    {
        id: 1,
        descripcion: "Cafetera Moulinex",
        precio: 6770,
        descuento: 40,
        foto: "img-cafetera-moulinex.jpg"
    },

    {
        id: 2,
        descripcion: "MacBook Pro 2019",
        precio: 230000,
        descuento: 20,
        foto: "img-macbook-pro-2019.jpg"

    },

    {
        id: 3,
        descripcion: "Samsung Galaxy S10",
        precio: 70500,
        descuento: 10,
        foto: "img-samsung-galaxy-s10.jpg"
    },

    {
        id: 4,
        descripcion: "SmartTv Samsung 43",
        precio : 23200,
        descuento: 5,
        foto: "img-tv-samsung-smart.jpg"
    }

];


// Cargo las funciones que quiero que haga
// Las derivo por render al archivo ejs que le diga

const controller = {

    index: (req, res) => {
        res.render('index');
    },

    login: (req, res) => {
        res.render('login');
    },
    
    register: (req, res) => {
        res.render('register');
    },

    products: (req, res) => {
        res.render('products', {"listaProductos": listaProductos});
    },

    productsDetail: (req, res) => {
        const idProducto = req.params.id;
        const productoActual = listaProductos.find( (element) => {
            return element.id == idProducto;
        });

        res.render("productsDetail", {"productoActual": productoActual});
    }

}

module.exports = controller;