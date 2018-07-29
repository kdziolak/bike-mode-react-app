export function postDateValue (date){
    return dispatch => {
        dispatch({
            type: 'POST_DATE_VALUE',
            payload: date
        })
    }
}

export function postTripDataValue (trip){
    return dispatch => {
        dispatch({
            type: 'POST_TRIP_DATA_VALUE',
            payload: trip
        })
    }
}