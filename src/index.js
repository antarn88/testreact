import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    {/* Beszúrtuk a BookList komponenst ide */}
    <BookList />

  </div>
);