import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addAwinningTeam(action) {
    try {
        yield axios.post('/api/prediction', action.payload)
       // yield put({ type: 'FETCH_PREDICTION' })

    } catch (error) {
        console.log('Error adding a winning team', error);
    }
}

function* addWinningTeamSaga() {
    yield takeLatest('ADD_WINNING_TEAM', addAwinningTeam)
}

export default addWinningTeamSaga;