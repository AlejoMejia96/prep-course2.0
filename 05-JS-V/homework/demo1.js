/* //clases ES6
class Usuarios {
    constructor(nombre, email, pais, edad) {
        this.nombre = nombre;
        this.email = email;
        this.pais = pais;
        this.edad = edad;
    }
    informacion() {
        return 'Hola, me llamo ' + this.nombre + ' tengo ' + this.edad;
    }
    nombreCompleto() {
        return 'Mi nombre completo es ' + this.nombre;
    }
} */

//funcion constructora
function Usuarios(nombre, email, pais, edad){
    this.nombre = nombre;
    this.email = email;
    this.pais = pais;
    this.edad = edad
}

Usuarios.prototype.informacion = function(){
    return 'Hola, me llamo ' + this.nombre + ' tengo ' + this.edad
}

Usuarios.prototype.nombreCompleto = function(){
    return 'Mi nombre completo es ' + this.nombre 
}


//instancias
var alejo = new Usuarios('Alejo', 'alejo@mail.com', 'Col', 35);

console.log(alejo.informacion());
console.log(alejo.nombreCompleto());
//console.log(alejo)

var ricardo = new Usuarios('Ricardo', 'ricar@mail.com', 'Mex', 68);
var eduar = new Usuarios('Luis', 'luis@mail.com', 'Per', 18);

//****************************************************************** */
function Car(modelo, color, marca, paisUbicacion){
    this.modelo = modelo;
    this.color = color;
    this.marca = marca;
    this.paisUbicacion = paisUbicacion;
    this.precio = null
}
//instancia de la clase Car
var auto1 = new Car(2021, 'rojo', 'Renault', 'Col');

var auto2 = new Car(2022, 'negro', 'Lamborghini', 'Ita');



String.prototype.reverse = function(){
    var invertida = ''; 
    for(var i = this.length - 1; i >= 0; i--){
      invertida = invertida + this[i]
      //   'inot'       'inot'
    }
    return invertida
}

var string = new String("hola");
console.log(string.reverse());