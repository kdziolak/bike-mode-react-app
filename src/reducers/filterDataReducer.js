const filterData = (
    state = 
        {
            dateValue: 'allDates',
            tripData: 'speed'
        },
    action = {}
  ) => {
    switch (action.type) {
      case "POST_DATE_VALUE": {
        state = {
            tripData: state.tripData,
            dateValue: action.payload
          }
        break;
      }
      case "POST_TRIP_DATA_VALUE": {
        state = {
            dateValue: state.dateValue,
            tripData: action.payload
          }
        break;
      }
    }
    return state;
  };
  
  export default filterData;
  