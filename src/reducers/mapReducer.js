const map = (
    state = 
        {
            markers: [],
        },
    action = {}
  ) => {
    switch (action.type) {
      case "SEND_MARKERS": {
        state = 
          {
              markers: [...state.markers, action.payload]
          }
        break;
      }
    }
  
    return state;
  };
  
  export default map;
  