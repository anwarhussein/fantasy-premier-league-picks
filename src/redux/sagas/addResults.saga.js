import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addFixtureResults(action) {
    try {
        console.log(action.payload)
        const fixtureToUpdateId = action.payload;
        console.log(fixtureToUpdateId)
        console.log('Team to edit is', action.payload.selectTeam)
        const teamPick = {team: action.payload}
        yield axios.put(`/api/fixture/${fixtureToUpdateId.id}`, teamPick)
        //yield put({ type: 'FETCH_FIXTURES' })

    } catch (error) {
        console.log('Error Updating a winning team', error);
    }
}

function* addResultsSaga() {
    yield takeLatest('ADD_RESULTS', addFixtureResults)
}

export default addResultsSaga;