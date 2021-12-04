const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) 
En productsFilePath le pongo la ruta de dónde está el archivo
Leo el archivo JSON y lo convierto en un array de objetos literales en la variable products*/
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* La constante "toThousand" deben enviarla como parametro en el res.render,
les ayudará para mostrar el precio final adecuadamente con 
una cantidad de decimales fija. Es una función, solamente deben poner
como parámetro el precio final (en el archivo ejs): toThousand(finalPrice)*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => { //Le paso al render el objeto literal products. productsSent es el atributo del obj literal
			
		res.render("index", {
			productsSent: products
		})
		
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
