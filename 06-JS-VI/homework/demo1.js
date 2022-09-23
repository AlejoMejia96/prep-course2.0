//callbacks


function decirAdiosAlUsuario(usuario) {
    return "Adiós " + usuario + "!";
}

function decirHolaAlUsuario(usuario) {
    return "Hola " + usuario + "!";
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo("Dan", decirHolaAlUsuario); // Hola Dan!

crearSaludo("Dan", decirAdiosAlUsuario); // Adiós Dan!

