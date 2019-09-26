import { initReducer } from '../reducers/initReducer';

export default function todoReducer(state, action) {
    console.log('state init:', state)
    if (state === undefined || state.length === 0)
        state = initReducer;
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                todoList: [...state.todoList, {
                    item: action.item,
                    checked: false
                }]
            }
        default: return state;
    }
}