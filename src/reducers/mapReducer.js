const map = (
    state = 
        {
            markers: [],
            position: []
        },
    action = {}
  ) => {
    switch (action.type) {
      case "SEND_MARKERS": {
        state = {
            markers: [...state.markers, action.payload.distance],
            position: action.payload.position
          }
        break;
      }
    }
    return state;
  };
  
  export default map;
  