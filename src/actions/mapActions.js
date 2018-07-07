export function sendMarkersToMap (distance) {
    return {
        type: 'SEND_MARKERS',
        payload: distance
    }
}