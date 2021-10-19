import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';


function* fetchWinnerFixtures(){
    try{
        const response = yield axios.get(`/api/winners`)
        console.log("in FetchwinnersFixtures", response.data)
        yield put({type: 'SET_FIXTURE_WINNERS', payload: response.data});

    }catch(error){
        console.log('Failed getting the winners fixtures', error);
    }
}

function* fetchFixtureWinnerSaga(){
    yield takeLatest('FETCH_FIXTURES_WINNERS', fetchWinnerFixtures)
}

export default fetchFixtureWinnerSaga