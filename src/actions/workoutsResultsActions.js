import fire from 'firebase';

export function getDataFromDatabase (){
    return dispatch => {
        fire.database().ref('/trips').on('child_added', snap => {
            let { tripId, tripMeasurementPoint, dateWorkout } = snap.val()
            dispatch({
                type: 'GET_DATA_FROM_DATABASE',
                payloads: {
                    tripId,
                    tripMeasurementPoint,
                    dateWorkout
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

export function postDateValue (date){
    return dispatch => {
        dispatch({
            type: 'POST_DATE_VALUE',
            payload: date
        })
    }
}