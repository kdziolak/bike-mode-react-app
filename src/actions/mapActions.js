export function sendMarkersToMap (distance, position) {
    return {
        type: 'SEND_MARKERS',
        payload: {
            distance,
            position
        }
    }
}