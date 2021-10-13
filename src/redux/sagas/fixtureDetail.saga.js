import { takeLatest } from "@redux-saga/core/effects";
import axios from 'axios'


function* fetchFixtureDetails(action) {
    try {
        const fixture = action.payload;
        const fixtureDetails = yield axios.get(`/api/fixture/date/${fixture.date}`);
        yield put({ type: 'SET_DATE_DETAIL', payload: fixtureDetails.data });
    } catch (error) {
        console.error('ERROR in fetchDetails', error);
        alert('Unable to get fixture details');
    }
}

function* fixtureDatesSaga(){
    yield takeLatest('FETCH_DATE_FIXTURES', fetchFixtureDetails)
}

export default fixtureDatesSaga;