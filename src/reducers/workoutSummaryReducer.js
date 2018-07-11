const summaryWorkout = (
    state = 
        {
            measurementPoint: []
        },
    action = {}
  ) => {
    switch (action.type) {
      case "SEND_MEASUREMENT": {
        state = {
            measurementPoint: action.payload
          }
        break;
      }
    }
    return state;
  };
  
  export default summaryWorkout;
  