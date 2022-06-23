import React from 'react';

// Ez egy mezei Stateless komponens
const BookTitle = (props) => {
  return (<h2 onClick={props.onClickFunc(props.title)}>{props.title}</h2>);
};

export default BookTitle;