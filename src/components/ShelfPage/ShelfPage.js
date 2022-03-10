import React, {useEffect} from 'react';
import AddBook from '../AddBook/AddBook.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';


function ShelfPage() {
  const dispatch = useDispatch();
  const books = useSelector(store => store.shelf);

  useEffect(() => {
    dispatch({type:'FETCH_BOOKS'})
  }, [])

  console.log('books are', books);
  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {books.map((book, i) => (
           <ShelfItem key={i} book={book} />
        ))}
      </ul>
      <AddBook /> 

    </div>
  );
}

export default ShelfPage;

  
