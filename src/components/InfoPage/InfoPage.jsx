import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const books = useSelector(store => store.shelf);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch({type:'FETCH_BOOKS'})
  }, [])
console.log(books);
  return (
    <div className="container">
      <p>Info Page
      </p>
      <ul>
      {books.map((book, i) =>{
       return <li key={i}>{book.description}</li>
      })}
      </ul>
    </div>
  );
}

export default InfoPage;
