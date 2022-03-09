import React from 'react';
import AddBook from '../AddBook/AddBook.jsx';


// useffect and call shelf.saga



function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <AddBook /> 

    </div>
  );
}

export default ShelfPage;
