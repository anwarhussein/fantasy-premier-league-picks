const setFixtures = (state = [], action) => {
    switch (action.type) {
        case 'SET_FIXTURE':
            return action.payload;

        default:
            return state;
    }
};
export default setFixtures;