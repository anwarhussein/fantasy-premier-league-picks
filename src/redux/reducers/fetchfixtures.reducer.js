const setFixtures = (state = [],action) =>{
    switch(action.type){
        case 'SET_FIXTURES':
            return action.payload;
    }
    return state;
}
export default setFixtures;