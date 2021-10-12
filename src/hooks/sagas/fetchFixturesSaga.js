import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';


function* fetchFixtures(){
    try{
        const fixtureResponse = yield axios.get()
        console.log("in FetchFixtures", fixtureResponse.data)
        yield put({type: 'SET_FIXTURES', payload:fixtureResponse});

    }catch(error){
        console.log('Failed getting the fixtures', error);
    }
}

function* fetchSaga(){
    yield takeLatest('FETCH_FIXTURES', fetchFixtures)
}