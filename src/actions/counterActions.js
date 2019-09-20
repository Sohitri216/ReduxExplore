export function incrementCounter(val) {
    return {
        type: 'INC_COUNT',
        payload: {
            counterVal: val + 1
        }
    }

}

export function decrementCounter(val) {
    return {
        type: 'DEC_COUNT',
        payload: {
            counterVal: val - 1
        }
    }
}