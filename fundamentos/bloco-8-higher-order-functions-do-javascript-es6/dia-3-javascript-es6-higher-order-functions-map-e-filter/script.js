const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = (array) => array.map( (livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
//console.log(formatedBookNames(books));

//2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const nameAndAge = (array) => array.map((livro) => arrayOrdenado = {age: livro.releaseYear - livro.author.birthYear, name: livro.name})
.sort((a, b) => a.age < b.age ? -1 : 1);
  //console.log(nameAndAge(books));

//3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = (array) => array.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
//console.log(fantasyOrScienceFiction(books));

//4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const oldBooks0rdered = (array) => array.filter((book) =>(2022 - book.releaseYear) > 60).sort( (a, b) => a.releaseYear < b.releaseYear ? -1 : 1);
//console.log(oldBooks0rdered(books));

//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasy0rScienceFictionAuthors = (array) => array.filter( (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
//console.log(fantasy0rScienceFictionAuthors(books));

//6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (array) => array.filter( (book) => (book.releaseYear < 1962)).map((olds) => olds.name)
//console.log(oldBooks(books));

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const authorWith3DotsOnName = (array) => array.find((book) => book.author.name.startsWith('J. R. R.')).name;
//console.log(authorWith3DotsOnName(books));