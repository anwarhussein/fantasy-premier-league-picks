
const selectedDate = (state = [], action) => {
    switch(action.type) {
      case 'SET_DATE_DETAIL':
        return action.payload;
      default:
        return state;
    }
  }

  export default selectedDate 