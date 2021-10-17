const setMatch = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_YOUR_TEAM':
            return action.payload;

        default:
            return state;
            
    }
   
};
export default setMatch;