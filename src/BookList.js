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

    // Aszinkron módon renderelés után hozzáadtunk egy új könyvet, ezzel szimulálva egy szerverhívást
    setTimeout(() => {
      this.setState({
        books: [...this.state.books, { title: 'Jason Stathem - 9 mm', snNumber: 'nhg-787' }]
      });
    }, 2000);

    // Könyv frissítése kicsit később
    setTimeout(() => {
      this.setState({
        books: this.state.books.map(book => book.title === 'Zámbó Jimmy élete' ? { ...book, title: 'Zámbó Imre élete' } : book),
      });
    }, 4000);

  }

  // Mindenképpen szükséges egy render function, ami visszatér egy JSX-el.
  render() {
    console.log('Ez a renderből jön');
    return (
      <div>
        <h1>Könyvek:</h1>

        {/* A Book komponensnek átadjuk az aktuális könyvet és kell adni még egy egyedi azonosítót is, például a key-jel */}
        <div>{this.state.books.map((book, index) => <Book book={book} key={index} />)}</div>

      </div>
    );
  }
}

export default BookList;
