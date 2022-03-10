import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* editBook(action) {
    console.log('In edit book, action.payload is:', action.payload);
    try{
        yield axios.put('/api/shelf/', action.payload);
        yield put({type: 'FETCH_BOOKS'}) //
    }catch (error){
        console.log('Error editing book');
    }
   
}

function* editBookSaga() {
    yield takeEvery('EDIT_BOOK', editBook);
  }


export default editBookSaga;