import fire from '../firebase';

export function sendMeasurement (measurement) {
    return {
        type: 'SEND_MEASUREMENT',
        payload: measurement
    }
}

export function sendIndexToDisplayValues (index){
    return {
        type: 'SEND_INDEX',
        payload: index
    }
}

export function saveToDatabase (trip){
    return dispatch => {
        let newTrip = fire.database().ref('/').push();
        let id = newTrip.key;
        newTrip.set({
            trips:{
                tripId: id,
                tripPoints: trip
            }
        });
    }
}