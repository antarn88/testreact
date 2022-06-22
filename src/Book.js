import { Component } from 'react';

class Book extends Component {

  state = {
    first: 'First',
    second: 'Second',
    selectedBook: null,
  };

  // Használjunk Array functiont, hogy elérjük a this-t!
  onClickBook = (/** @type {string} */ title) => {
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

  render() {

    const { title, snNumber } = this.props.book;

    return (
      <div>

        <h4 onClick={() => this.onClickBook(title)}>{title}</h4>
        {/* VAGY PARAMÉTER NÉLKÜL: <h4 onClick={this.onClickBook}>{title}</h4> */}


        <p>{snNumber}</p>
        <hr></hr>
      </div>
    );
  }
};

export default Book;
