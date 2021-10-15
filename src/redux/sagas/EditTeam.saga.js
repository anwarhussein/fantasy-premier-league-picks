import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* editYourPrediction(action) {
    try {
        const teamToEdit = action.payload
        console.log("Item to edit is: ", teamToEdit);
        yield axios.put(`/api/prediction/${teamToEdit}`);
        yield put({ type: 'FETCH_PREDICTION' });
    } catch (error) {
        console.log('Error in Editing a team', error);
    }
}

function* editTeamSaga() {
    yield takeLatest('EDIT_YOUR_TEAM', editYourPrediction)
}

export default editTeamSaga;