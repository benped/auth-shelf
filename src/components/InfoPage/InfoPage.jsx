import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';



// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
 // const books = useSelector(store => store.shelf);
  const bookReducer = useSelector(store => store.bookReducer);
  const dispatch = useDispatch();
  const [description, setDescription] = useState(bookReducer.description)
  const [image, setImage] = useState(bookReducer.image_url);
 
//   useEffect(() => {
//     dispatch({type:'FETCH_BOOKS'})
//   }, [])
// console.log(books);

const handleSubmit = (event) => {
  console.log('clicked submit');
  const editInfo = {
    id: bookReducer.id,
    description: description,
    image_url: image
  }
  dispatch({type: 'EDIT_BOOK', payload: editInfo})
}

  return (
    <div className="container">
      <p>Info Page
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={description} onChange={(event) => setDescription(event.target.value)}/>
     
        <input type="text"  value={image} onChange={(event) => setImage(event.target.value)}/>
        <button type="submit">Submit</button>
    
      </form>
      {/* <ul>
      {books.map((book, i) =>{
       return <li key={i}>{book.description}</li>
      })}
      </ul> */}
    </div>
  );
}

export default InfoPage;
