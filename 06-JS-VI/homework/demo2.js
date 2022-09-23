function resultado(num1,num2,cb){
    var doble = cb(num1,num2) * 2;

    return doble
}

function suma(a,b){
    return a + b
}

resultado(4,6,suma)

//***************************************************************//

//funcion de callback que me muestre la edad de un usuario pasado como parametro de 
//la otra funcion


function uno(num, cb){
    var edad = cb(num);
    return 'hola, tu edad es: ' + edad
}

function dos(num){
    return 2022 - num
}

dos(1997) // 25

uno(1997, dos)



