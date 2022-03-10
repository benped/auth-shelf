import React from 'react';
import {useDispatch} from 'react-redux';



function ShelfItem({ book }) {
  console.log('in ShelfItem');

  const dispatch = useDispatch();


  //   const books = useSelector(store => store.shelf);


  //   console.log('books are', books);

  // when delete is pressed, it will delete the list row
  function deleteBook() {
    console.log(book.id);
    
    dispatch({ type: 'DELETE_BOOK', payload: book.id});

  }


  return (
    <li
      value={book.id}
    >
      {book.description}
      <img src={book.image_url} alt="book image" />
      <button

        onClick={() => deleteBook(book.id)}
      >DELETE</button>

    </li>



  );
}

export default ShelfItem;