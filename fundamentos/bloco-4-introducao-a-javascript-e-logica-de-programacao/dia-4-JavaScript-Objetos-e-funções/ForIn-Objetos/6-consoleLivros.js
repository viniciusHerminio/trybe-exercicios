/*6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".*/

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
let livroFavorito = {};

for (let key in leitor.livrosFavoritos) {
        livroFavorito = (leitor.livrosFavoritos[key]);
}
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + livroFavorito.titulo + ".");