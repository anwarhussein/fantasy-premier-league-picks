import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchPrediction() {
    try {
        const response= yield axios.get('/api/fixture')
        yield put({ type: 'SET_PREDICTION', payload: response.data });

    } catch (error) {
        console.log('Error fetching a prediction', error);
    }
}

function* fetchPredictionSaga() {
    yield takeLatest('FETCH_PREDICTION', fetchPrediction)
}

export default fetchPredictionSaga;