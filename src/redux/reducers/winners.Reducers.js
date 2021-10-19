
const setWinners = (state = [], action) => {
    switch(action.type) {
      case 'SET_FIXTURE_WINNERS':
        return action.payload;
      default:
        return state;
    }
  }

  export default setWinners 