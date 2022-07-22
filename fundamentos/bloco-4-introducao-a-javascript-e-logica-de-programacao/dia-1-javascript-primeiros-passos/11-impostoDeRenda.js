let salarioBruto = 3000;
let salario = 0;
let imposto = 0;


if ( salarioBruto <= 1556.94) {
    salario = salarioBruto - salarioBruto * 8/100;
} else if ( salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salario = salarioBruto - salarioBruto * 9/100;
} else if ( salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salario = salarioBruto - salarioBruto * 11/100;
} else {
    salario = salarioBruto - 570.88;
}


if ( salario <= 1903.98 ) {
    imposto = 0;
} else if ( salario > 1903.98 && salario <= 2826.65) {
    imposto = salario * 7.5/100 - 142.80;
} else if ( salario > 2826.65 && salario <= 3751.05) {
    imposto = salario * 15/100 - 354.80;
} else if ( salario > 3751.05 & salario <= 4664.68) {
    imposto = salario * 22.5/100 - 636.13;
}else {
    imposto = salario * 27.5/100 - 869.36
}

let salarioBase = salario - imposto;
console.log(salarioBase);