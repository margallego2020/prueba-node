function formato_autos (marca, modelo, precio, km, color, cuotas, anio, patente, vendido){
    this.marca= marca;
    this.modelo = modelo;
    this.precio = precio;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas;
    this.anio = anio;
    this.patente = patente;
    this.vendido = vendido;
};

let primerAuto = new formato_autos("Ford", "Fiesta", 150000,200,"Azul",12, 2019, "APL123",false ); 
let segundoAuto = new formato_autos("Toyota", "Corolla", 100000,0,"Blanco",14, 2019, "JJK116",false ); 

let autos = [primerAuto, segundoAuto];
//console.log(autos);
module.exports = autos;
