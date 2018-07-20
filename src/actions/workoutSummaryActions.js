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

export function saveToDatabase (){
    console.log(fire.database().ref())
}