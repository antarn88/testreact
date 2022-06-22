import { Component } from 'react';
import Book from './Book';

class BookList extends Component {

  state = {
    books: [
      { title: 'Zámbó Jimmy élete', snNumber: 'sfsdfds' },
      { title: 'Stephen King - Az', snNumber: 'sfsdfds2' },
      { title: 'A zsidó és a paripa', snNumber: 'sfsdfds3' },
      { title: 'Terminator 666.', snNumber: 'sfsdfds4' },
    ],
  };

  constructor(props) {
    super(props);
    console.log('Konstuktor');
  }

  // LIFE CYCLE: Ez pedig akkor fut le, amikor már lerenderelődött a komponens
  componentDidMount() {
    console.log('Renderelés után');
  }

  // Mindenképpen szükséges egy render function, ami visszatér egy JSX-el.
  render() {
    console.log('Ez a renderből jön');
    return (
      <div>
        <h1>Könyvek:</h1>

        {/* A Book komponensnek átadjuk az aktuális könyvet és kell adni még egy egyedi azonosítót is, például a key-jel */}
        <div>{this.state.books.map((book) => <Book book={book} key={book.snNumber} />)}</div>

      </div>
    );
  }
}

export default BookList;
