import fire from 'firebase';

export function getDataFromDatabase (){
    return dispatch => {
        fire.database().ref('/trips').on('child_added', snap => {
            let { tripId, tripMeasurementPoint, dateWorkout, mapPosition } = snap.val()
            dispatch({
                type: 'GET_DATA_FROM_DATABASE',
                payloads: {
                    tripId,
                    tripMeasurementPoint,
                    dateWorkout,
                    mapPosition
                }
            })
        })
    }
}

export function clearDataAfterUnmount (){
    return dispatch => {
        dispatch({
            type: 'CLEAR_DATA_AFTER_UNMOUNT',
            payloads: null
        })
    }
}
