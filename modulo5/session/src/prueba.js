let bcrypt = require('bcrypt');

let password = 'reyenelnorte';

let resultado = bcrypt.hashSync(password, 10); //Hasheo la password. 10 es la cantidad de rondas de seguridad que quiero tomar

let validacion = bcrypt.compareSync(password, resultado); //comparo la password entre lo que tengo hasheado y otro valor
//1 ero texto plano y 2 do la contraseña del hash

// console.log(password);
// console.log(resultado);
console.log(validacion);



