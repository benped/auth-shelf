import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Fetch items 
function* fetchBooks() {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    // // the config includes credentials which
    // // allow the server session to recognize the user
    // // If a user is logged in, this will return their information
    // // from the server session (req.user)
    const response = yield axios.get('/api/shelf');
    console.log('response.data is', response.data);
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* shelfSaga() {
  yield takeLatest('FETCH_BOOKS', fetchBooks);
}

export default shelfSaga;