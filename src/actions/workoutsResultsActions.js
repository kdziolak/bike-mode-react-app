import fire from 'firebase';

export function getDataFromDatabase (){
    return dispatch => {
        fire.database().ref('/trips').on('child_added', snap => {
            let { tripId, tripMeasurementPoint, dateWorkout, mapPositions } = snap.val()
            dispatch({
                type: 'GET_DATA_FROM_DATABASE',
                payloads: {
                    tripId,
                    tripMeasurementPoint,
                    dateWorkout,
                    mapPositions
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
