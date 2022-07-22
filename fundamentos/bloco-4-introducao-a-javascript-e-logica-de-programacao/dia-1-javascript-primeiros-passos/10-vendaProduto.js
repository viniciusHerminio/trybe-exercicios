let custo = 50;
let venda = 20;
let lucro = 0;
let lucroMil = 0;

if ( custo < 0 || venda < 0){
    console.log("valor de venda ou custo inválido");
} else {
    custo = (custo * 20/100) + custo; 
    lucro = venda - custo;
    lucroMil = lucro * 1000;

    console.log(lucroMil);
}



