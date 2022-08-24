let capturando = 80;
let capturando2 = 50;
let capturando3 = 50;



        if (capturando + capturando2 + capturando3 === 180) {
            resultado = true;
        } else if (capturando < 0) {
            resultado = "Ângulo 1 Inválido"
        } else if (capturando2 < 0) {
            resultado = "Ângulo 2 Inválido"
        } else if (capturando3 < 0) {
            resultado = "Ângulo 3 Inválido"

        } else {
            resultado = false;
        }
console.log(resultado);