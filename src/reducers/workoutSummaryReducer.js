const summaryWorkout = (
    state = 
        {
            measurementPoint: [],
            index: 0
        },
    action = {}
  ) => {
    switch (action.type) {
      case "SEND_MEASUREMENT": {
        state = {
            ...state,
            measurementPoint: action.payload
          }
        break;
      }
      case "SEND_INDEX": {
        state = {
            ...state,
            index: action.payload
          }
        break;
      }
    }
    return state;
  };
  
  export default summaryWorkout;
  