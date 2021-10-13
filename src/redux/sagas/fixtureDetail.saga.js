import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'


function* fetchFixtureDetails(action) {
    try {
        const date = action.payload;
        const fixtureDetails = yield axios.get(`/api/fixture/date/${date}`);
        yield put({ type: 'SET_DATE_DETAIL', payload: fixtureDetails.data });
    } catch (error) {
        console.error('ERROR in fetchDetails', error);
        alert('Unable to get fixture details');
    }
}

function* fixtureDatesSaga(){
    yield takeLatest('FETCH_DATE_FIXTURE', fetchFixtureDetails)
}

export default fixtureDatesSaga;