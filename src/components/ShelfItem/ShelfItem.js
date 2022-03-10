import React from 'react';
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux';


function ShelfItem({book}) {
    console.log('in ShelfItem');
     
//   const books = useSelector(store => store.shelf);
//   console.log('books are', books);
const history = useHistory();
const dispatch = useDispatch();
const handleClick = () => {
  console.log('clicked edit');
  dispatch({type: 'SET_EDIT_BOOK', payload: book})
  history.push('/info')

}
  
  return (
    <li>
        {book.description}
        <img src={book.image_url} alt="book image" />
        <button onClick={handleClick}>Edit</button>
    </li>



  );
}

export default ShelfItem;