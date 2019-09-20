export default function counterReducer(state = [], action) {
    console.log('action:', action);
    switch (action.type) {
        case 'INC_ASYNC': return action.payload.counterVal;

        case 'DEC_COUNT': return action.payload.counterVal;

        default: return state;
    }
}
