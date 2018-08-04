const summaryWorkout = (
    state = 
        {
            measurementPoint: [],
            mapPosition: [],
            index: 0
        },
    action = {}
  ) => {
    switch (action.type) {
      case "SEND_MEASUREMENT": {
        state = {
            ...state,
            measurementPoint: action.payloads.measurement,
            mapPositions: action.payloads.mapPositions
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
  