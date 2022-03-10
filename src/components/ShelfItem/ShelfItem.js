import React from 'react';



function ShelfItem({book}) {
    console.log('in ShelfItem');
    
  
//   const books = useSelector(store => store.shelf);

 
//   console.log('books are', books);
  
  return (
    <li>
        {book.description}
        <img src={book.image_url} alt="book image" />
    </li>
    

   
  );
}

export default ShelfItem;