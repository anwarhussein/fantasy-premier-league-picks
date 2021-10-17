import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* editYourPrediction(action) {
    try {
        const matchToEditId = action.payload
        console.log(matchToEditId)
        console.log("hey", action.payload.team)
        const teamName = {team: action.payload}
    
        console.log("Item to edit is: ", matchToEditId.id);
        yield axios.put(`/api/prediction/${matchToEditId.id}`,teamName);
        // yield put({ type: 'FETCH_PREDICTION' });
    } catch (error) {
        console.log('Error in Editing a team', error);
    }
}

function* editTeamSaga() {
    yield takeLatest('MAKE_EDIT', editYourPrediction)
}

export default editTeamSaga;