import { Component } from 'react';
import BookTitle from './BookTitle';

class Book extends Component {

  state = {
    first: 'First',
    second: 'Second',
    selectedBook: null,
    title: this.props.book.title,
  };

  // Használjunk Array functiont, hogy elérjük a this-t!
  // az event változóval elérjük a natív onClick eseményt is
  onClickBook = (/** @type {string} */ title) => (event) => {
    console.log('Klikkeltél a címre!');

    // Nem közvetlenül állítjuk a State-tet, hanem a setState segítségével!
    // Csak a módosítani kívánt property-t kell felülcsapni, a többi prop nem veszik el!
    this.setState({
      selectedBook: title,
    }, () => {
      console.log('Ez a függvény opcionális, akkor fut le, amikor a State már módosult!');
      console.log('TITLE:', title);
    });
  };

  // constructor(props) {
  //   super(props);
  //   console.log('Könyv:', this.props.book);
  // }

  // LIFE CYCLE - HA VÁLTOZIK A STATE-BEN A TITLE KÍVÜLRŐL, AKKOR ENNEK KÖSZÖNHETŐEN MINDIG MEGKAPJA A FRISSET
  static getDerivedStateFromProps(props) {
    return {
      title: props.book.title,
    };
  }

  render() {

    const { snNumber } = this.props.book;

    return (
      <div>

        {/* Komponens vagy HTML elem feltételhez kötése: */}
        {/* Ha az snNumber n-nel kezdődik, akkor jelenjen meg a BookTitle! */}


        {/* JSX elem kapcsos közé, majd azon belül egy feltétel és egy && jel */}

        {snNumber.startsWith('n') && <BookTitle title={this.state.title} onClickFunc={this.onClickBook} />}


        <p>{snNumber}</p>
        <hr></hr>
      </div>
    );
  }
};

export default Book;
