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

  //  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

  const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947);
  //console.log(authorBornIn1947());

  // 2 - Retorne o nome do livro de menor nome.
let nameBook = books[0].name;
const smallerName = () => {
  books.forEach((book) => {
    if (nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}
 //console.log(smallerName());

 // 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário..

const everyoneWasBornOnSecXX = (array) => array.every((book) => book.author.birthYear >= 1901); 
//console.log(everyoneWasBornOnSecXX(books));

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = (array) => array.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);

console.log(someBookWasReleaseOnThe80s(books));
