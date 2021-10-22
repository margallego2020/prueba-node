const about =  
    {
        titulo: "Pimienta & Sal",

        descripcion: "Iria la descripcion original.Lorem ipsumdfjdalkfj  f;djafl ksja dfl  ;ldjf ;saldfj ;alsdfj  ldjf ;alsdkfj sadf dolor sit amet, consectetur adipiscing elit consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et",

        historia: " Iria la historia original. Excepteur sint occaecaj;jflkdasfj a; ldfj ;asdfj adkl;sf  ldjf ;dalkfj a;ldfj  lj lj ;j kt cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing"
    
    }


const listaMenu = [ 
    { 
        id: 1,
        titulo: "Carpaccio fresco",
        // descripcionDetallada: "333333",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: "65.50",
        foto: "Carpaccio-de-salmon.jpg"
    },

    { 
        id: 2,
        titulo: "Risotto de berenjena",
        // descripcionDetallada: "55555",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "47.00",
        foto: "Risotto-berenjena-queso-cabra.jpg" 
    },

    { 
        id: 3,
        titulo: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        // descripcionDetallada: "121211212",
        precio: "27.50",
        foto:  "Mousse-de-arroz-con-leche.jpg"
    },

    { 
        id: 4,
        titulo: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        // descripcionDetallada: "55554444",
        precio: "37.50",
        foto: "esparragos.png" 
    }

]


// Cargo las funciones que quiero que haga
// Las derivo por render al archivo ejs que le diga

const controller = {

  index: (req, res) => {
      res.render('index', {listaMenu: listaMenu, about: about});
  },

  detalleMenu: (req, res) => {
        const posId = req.params.id;

        const platoDelDia = listaMenu.find( (elemento) => {
            return elemento.id == posId;
        });
        if ((platoDelDia == undefined) ){
            res.render('error');
        }
        else {
            res.render('detalleMenu', {platoDelDia: platoDelDia});
        }
    }
    
  

}

module.exports = controller;