const resultsWorkout = (
    state = [
        {
            tripId: '',
            tripMeasurementPoints: {},
            dateWorkout: {}
        }
    ],
    action = {}
  ) => {
    switch (action.type) {
      case "GET_DATA_FROM_DATABASE": {
        state = [
            ...state,
            {
                tripId: action.payloads.tripId,
                tripMeasurementPoints: action.payloads.tripMeasurementPoint,
                dateWorkout: action.payloads.dateWorkout
            }
        ]
        break;
      }
    }
    return state;
  };
  
  export default resultsWorkout;
  