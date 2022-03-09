import { user } from "pg/lib/defaults";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddBook() {
  const [bookDescription, setBookDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log("Inside Click handler");
    console.log('user is', user);
    dispatch({
      type: "ADD_BOOK",
      payload: { description: bookDescription, imageURL: imageURL },
    });
    setBookDescription("");
    setImageURL("");
  };

  return (
    <>
      <form>
        <label>Description</label>
        <input
          value={bookDescription}
          onChange={(event) => setBookDescription(event.target.value)}
        ></input>
        <br />
        <label>Image URL</label>
        <input
          type="URL"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        ></input>
        <br />
        <button onClick={clickHandler}>Submit</button>
      </form>
    </>
  );
}

export default AddBook;
