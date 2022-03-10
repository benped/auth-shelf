import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// this is the deleteSaga
function* DeleteSaga(action) {
    console.log('action delete payload is', action.payload);
    try {
        yield axios.delete(`/api/shelf/${action.payload}`);
    } catch (error) {
        console.log('Error on deletesaga delete', error);
    }
    // re-renders DOM after pressing delete
    yield put ({type: 'FETCH_BOOKS'});
}


// this is the delete watcher saga
export default function* DeleteWatcherSaga() {
    yield takeEvery('DELETE_BOOK', DeleteSaga);

}


