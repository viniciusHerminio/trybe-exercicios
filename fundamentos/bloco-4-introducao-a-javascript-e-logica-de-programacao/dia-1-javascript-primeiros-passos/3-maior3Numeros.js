const a = 2;
const b = 5;
const c = 25;
let maiorNumero = 0;
if (a > b && a > c) {
    maiorNumero = a;
} else if (b > a && b > c) {
    maiorNumero = b;
} else {
    maiorNumero = c;
}
console.log(maiorNumero);