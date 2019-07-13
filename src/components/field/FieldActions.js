export function changeValue(event) {
    console.log("change value")
    return {
        type: 'VALUE_CHANGED',
        payload: event.target.value
    }
}