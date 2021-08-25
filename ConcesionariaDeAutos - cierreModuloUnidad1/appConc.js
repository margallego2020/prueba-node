let personaJuan =
{
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };

let autos = require('./autos');
const concesionaria = {
    autos : autos,

    buscarAuto: function (patente){
        let encontro=null;
        
        for (let i=0; i < autos.length; i++){
            
            if (autos[i].patente == patente){
                encontro = autos[i];
            }
           
        }
        return encontro;
    },
    venderAuto: function (patenteMar){
        let encontreAuto=this.buscarAuto(patenteMar);
        let posEncontrada=autos.indexOf(encontreAuto);
        if (encontreAuto != null){
            console.log("Lo encontre");
            autos[posEncontrada].vendido=true;
            }  
    },
    autosParaLaVenta: function(){
       
            let autosVenta = autos.filter(function(autos){
            return autos.vendido == false;
            });
        
        return autosVenta;
    },
    autosNuevos: function (){
            let autosEnVenta = this.autosParaLaVenta();
            let autosNuevosMar = autosEnVenta.filter(function(autosEnVenta){
                return autosEnVenta.km < 100;
            });
            return autosNuevosMar;
    },
    listaDeVentas: function(){
            let listaVentas=[];
            let autosVendidos = autos.filter(function (autos){
                return autos.vendido == true;
            });
            for (let i=0; i < autosVendidos.length; i++){
                listaVentas[i] = autosVendidos[i].precio;
            };
            return listaVentas;
    },
    totalDeVentas: function() {
        let importesVentas = this.listaDeVentas();
        if (importesVentas == 0){
            return 0;
        }
        else {
            let totalVentas = importesVentas.reduce(function (acumulador, ventas){
            return acumulador + ventas;
            });
            return totalVentas;
        }   
    },
    puedeComprar: function (nombreAuto, persona){
        let posicionAuto=0;
        for (let i=0; i < autos.length; i++){
            if (nombreAuto == autos[i].marca){
                posicionAuto=i;
            }
        }
        //console.log(posicionAuto);
        console.log('Capacidad pago total cliente: ' + persona.capacidadDePagoTotal);
        console.log('Precio del auto: ' + autos[posicionAuto].precio);
        let valorCuota = autos[posicionAuto].precio / autos[posicionAuto].cuotas;
        console.log('Capacidad pago cuota cliente: ' + persona.capacidadDePagoEnCuotas);
        console.log('Capacidad pago cuotas auto ' + valorCuota);
        if ((persona.capacidadDePagoTotal >= autos[posicionAuto].precio) && (persona.capacidadDePagoEnCuotas >= valorCuota)) {
            console.log("puede pagarlo");
            return true;
        }
        else {
            return false;
        }
        
    },
    autosQuePuedeComprar: function (persona){
        let autosParaVender = this.autosParaLaVenta();
        sePuedenComprar=[];
        console.log(autosParaVender);
        for (let i=0; i < autosParaVender.length; i++){
                if (this.puedeComprar(autosParaVender[i].marca, persona) == true ){
                    sePuedenComprar.push(autosParaVender[i]);
                }
        }
        return sePuedenComprar;
    }
}

   
    


//console.log(autos);
//console.log(concesionaria.venderAuto('APL123'));
//console.log(concesionaria.venderAuto('JJK116'));
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.puedeComprar('Ford', personaJuan));
//console.log(concesionaria.puedeComprar('Toyota', personaJuan));
console.log(concesionaria.autosQuePuedeComprar(personaJuan))
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());


    
    
