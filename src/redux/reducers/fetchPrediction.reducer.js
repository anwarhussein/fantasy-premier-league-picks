const setPrediction = (state = [], action) => {
    switch (action.type) {
        case 'SET_PREDICTION':
            return action.payload;

        default:
            return state;
    }
};
export default setPrediction;