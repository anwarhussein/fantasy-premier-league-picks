import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';


function* fetchFixtures(){
    try{
        const response = yield axios.get('/api/fixture')
        console.log("in FetchFixtures", response.data)
        yield put({type: 'SET_FIXTURE', payload: response.data});

    }catch(error){
        console.log('Failed getting the fixtures', error);
    }
}

function* fetchFixturesSaga(){
    yield takeLatest('FETCH_FIXTURE', fetchFixtures)
}

export default fetchFixturesSaga