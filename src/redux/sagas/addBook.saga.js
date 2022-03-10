import { put, takeEvery } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import axios from 'axios';


function* AddSaga(action) {
    console.log('action payload is', action.payload);

    try {

        yield axios.post('/api/shelf', action.payload);
    } catch (error) {
        console.log('Error on addsaga post', error);

    }
    yield put ({type: 'FETCH_BOOKS'});
}

function* AddWatcherSaga() {
    yield takeEvery('ADD_BOOK', AddSaga);

}


export default AddWatcherSaga;