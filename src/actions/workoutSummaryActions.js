export function sendMeasurement (measurement) {
    return {
        type: 'SEND_MEASUREMENT',
        payload: measurement
    }
}