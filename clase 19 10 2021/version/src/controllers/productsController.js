const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* La constante "toThousand" deben enviarla como parametro en el res.render,
les ayudará para mostrar el precio final adecuadamente con 
una cantidad de decimales fija. Es una función, solamente deben poner
como parámetro el precio final (en el archivo ejs): toThousand(finalPrice)*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// (get) Root - Mostrar todos los productos
	index: (req, res) => {
		res.render("products", {
			productsSent: products
		})
	},

	// (get) Detail - Detalle de un producto
	detail: (req, res) => {
		const id = req.params.id; //Guardo el parámetro que me llegó por :id
		const product = products.find(product => { //Guardo el producto cuyo id llegó por parámetro
			return product.id == id
		})
		res.render("detail", {
			productSent: product
		})
		
	},

	// (get) Create - Formulario para crear
	create: (req, res) => {
		res.render("product-create-form") //solo hay que mandar la vista del formulario de la vista para crear
			
	},
	
	// (post) Create - Método para guardar la info
	store: (req, res) => {
		// console.log(req.file); //Con esto veo qué parámetros recibe el archivo que subo
		
		//Guardamos el producto
		// res.send("Nuevo producto creado y guardado!!!");
		//Hay que guardar los datos que me están llegando por el formulario
		//Los recupero con req.body
		let newProduct = { //va a ser un objeto literal porque nuestro JSON es un array de objetos literales

			id: products[products.length - 1].id + 1, /*Lo que quiero es agarrar el último prodocto de la lista 
			(tiene el ID más alto de todos).
  			Y a ese número queremos agarrar su ID y sumarle uno más. Ese va a ser el nuevo producto que estamos
			  guardando*/
			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category: req.body.category,
  			description: req.body.description,
  			image: req.file.filename //es el nombre del archivo que lo generé cuando lo subí
		}
		// Hay que guardar este nuevo producto en el JSON hay que hacer un push y después agregar el array entero al 
		//archivo

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " ")); //el , null, " " es para que quede bien visually

		// Lo redirige a la página de productos donde muestra la lista actualizada
		res.redirect("/products")
	},

	// (get) Update - Formulario para editar
	edit: (req, res) => {
		const id = req.params.id; //Guardo el parámetro que me llegó por :id
		const product = products.find(product => { //Guardo el producto cuyo id llegó por parámetro
			return product.id == id
		})

		res.render("product-edit-form", {
			productSent: product
		}) //tengo que mandar los datos del número de producto que quiero editar. Tengo que editar en la vista por estos 
		// datos que mandé
	},

	// (post) Update - Método para actualizar la info
	update: (req, res) => {
		//Editamos el producto que llegó por parámetro su ID
		// res.send("Producto con id " + req.params.id + " editado y guardado!!!");

		//Hay que guardar los datos que me están llegando por el formulario
		//Los recupero con req.body
		
		//Almaceno el id del elemento a modificar que nos pasan por parámetro
		let id = req.params.id;

		//Busco la data que tiene guardado el producto que voy a editar para saber si hay que hacer cambios
		let productToEdit = products.find(product => {
			return product.id == id;
		})
		
		let editedProduct = { //va a ser un objeto literal porque nuestro JSON es un array de objetos literales

			id: id, /*Tomo el id que agarré recién*/
			name: req.body.name,
  			price: req.body.price,
  			discount: req.body.discount,
  			category: req.body.category,
  			description: req.body.description,
			image: req.file ? req.file.filename: productToEdit.image 
			/*Pregunto si req.file existe (es porque llegó un archivo): req.file != undefined
			Si llegó un archivo que nos ponga el nombre del archivo, sino que tenga la imagen previa*/
  			// image: productToEdit.image //tomo del archivo viejo su imagen

		}
		// Hay que guardar este nuevo producto en el JSON hay que hacer un push y después agregar el array entero al 
		//archivo

		//Hay que buscar la posición real en el array. El id puede cambiar si agregamos o eliminamos productos.
		//El id no nos dice la posición real que está en el array

		/* Moficamos el array */
		products.forEach((producto, index) => {
			if (producto.id == id) { //si el id que hay en cada campo id de producto es igual al id que busco por 
				//parámetro, piso el producto con el index, que es la posición real en el array
				products[index] = editedProduct;
			}
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " ")); //el , null, " " es para que quede bien visually


		// Lo redirige a la página de productos donde muestra la lista actualizada
		res.redirect("/products")
	},

	// (delete) Delete - Eliminar un producto de la DB
	destroy : (req, res) => {
		//Eliminamos el producto que llegó por parámetro su ID
		// res.send("Producto con id " + req.params.id + " eliminado!!!");

		let id = req.params.id;

		/* Moficamos el array */ 

		let finalProducts = products.filter(product => { //filtro todos los productos distintos que el id que viene por 
														// parámetro
			return product.id != id 
		});


		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " ")); //el , null, " " es para que quede bien visually

		// Lo redirige a la página de productos donde muestra la lista actualizada
		res.redirect("/products")

	}
};

module.exports = controller;