import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';


function* fetchFixtures(action){
    try{
        const postDate = action.payload
        const response = yield axios.get(`/api/fixture/${postDate}`)
        console.log("in FetchFixtures", response.data)
        yield put({type: 'SET_ALL_FIXTURES', payload: response.data});

    }catch(error){
        console.log('Failed getting the fixtures', error);
    }
}

function* fetchFixturesSaga(){
    yield takeLatest('FETCH_FIXTURES', fetchFixtures)
}

export default fetchFixturesSaga