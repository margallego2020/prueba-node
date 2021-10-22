const productsController = {
  index: (req, res) => {
    res.send('lista de productos');
  },
  checkout: (req, res) => {
    res.send('Carrito de compras');
  },
  detail: (req, res) => {
    const idProducto = req.params.id;

    res.send('Detalle de producto: ' + idProducto);
  }
};

module.exports = productsController;
