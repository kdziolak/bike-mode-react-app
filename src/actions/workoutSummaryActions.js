import fire from '../firebase';

export function sendMeasurement (measurement, mapPositions) {
    return dispatch => {
        dispatch({
            type: 'SEND_MEASUREMENT',
            payloads: {
                measurement,
                mapPositions
            }
        })
    }
}

export function sendIndexToDisplayValues (index){
    return {
        type: 'SEND_INDEX',
        payload: index
    }
}

export function saveToDatabase (tripData, mapPositions){
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    switch(month){
        case 0:{
            month = 'styczeń'
            break;
        }
        case 1:{
            month = 'luty'
            break;
        }
        case 2:{
            month = 'marzec'
            break;
        }
        case 3:{
            month = 'kwiecień'
            break;
        }
        case 4:{
            month = 'maj'
            break;
        }
        case 5:{
            month = 'czerwiec'
            break;
        }
        case 6:{
            month = 'lipiec'
            break;
        }
        case 7:{
            month = 'sierpień'
            break;
        }case 8:{
            month = 'wrzesień'
            break;
        }case 9:{
            month = 'październik'
            break;
        }case 10:{
            month = 'listopad'
            break;
        }case 11:{
            month = 'grudzień'
            break;
        }
        
    }
    let newTrip = fire.database().ref('/trips').push();
    let id = newTrip.key;
    newTrip.set({
        tripId: id,
        tripMeasurementPoint: tripData,
        dateWorkout: {
            date: `${day} ${month} ${year}`,
            time: `${hours}:${minutes}`
        },
        mapPositions
    })
}