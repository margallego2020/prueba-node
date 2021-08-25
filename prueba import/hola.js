const listaFunciones = {
    function sumar(numeroA, numeroB){
        return numeroA+numeroB;
    };
    function restar(numeroA, numeroB){
        return numeroA-numeroB;
    }
    function multiplicar(numeroA, numeroB){
        return numeroA*numeroB;
    }
    function dividir(numeroA, numeroB){
        return numeroA/numeroB;
    }
};




const funcionesDeOperaciones = {
    suma :sumar,
    resta :restar,
    multiplica :multiplicar,
    divide :dividir
}
module.exports = funcionesDeOperaciones;