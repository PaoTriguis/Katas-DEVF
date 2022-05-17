/* Crea un nuevo método para el siguiente objeto:
const myCollection = { books: [ { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', read: true }, { title: 'Do Androids Dream of Electric Sheep', author: 'Phillip K. Dick', read: false } ] };
El método debe llamarse isRead() que recibirá objeto con los atributos title, author y read.
Si el libro ha sido leído debe retornar:
"Ya has leido Cien Años de Soledad de Gabriel García Márquez"
Si el libro no ha sido leído debe retornar:
"Aún necesitas leer Do Androids Dream of Electric Sheep de Phillip K. Dick" */

const myCollection = {
    books: [
      {
        title: 'Cien Años de Soledad',
        author: 'Gabriel García Márquez',
        read: true
      },
      {
        title: 'Do Androids Dream of Electric Sheep',
        author: 'Phillip K. Dick',
        read: false
      }
    ],

    isRead (title, author, read) {
        if ( myCollection.books[0].read == true) {
        return ("Ya has leído ") + title + ("de ") + author;
    }
    else {
        return ("Aún necesitas leer ") + this.title + ("de ") + author;
    }
    }
  };