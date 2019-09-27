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
                    checked: false,
                    edit: false
                }]
            }

        case 'CHECKED_ITEM':
            console.log('state in reducer:', state);
            state.todoList[action.index].checked = !state.todoList[action.index].checked;
            return {
                todoList: state.todoList
            }

        case 'DELETE_ITEM':
            state.todoList.splice(action.index, 1);
            return {
                todoList: [...state.todoList]
            }

        case 'EDIT_ITEM':
            state.todoList[action.index].edit = true;
            return {
                todoList: [...state.todoList]
            }

        case 'CANCEL_EDIT':
            state.todoList[action.index].edit = false;
            return {
                todoList: [...state.todoList]
            }

        case 'EDIT_LIST_VALUE':
            state.todoList[action.payload.index].item = action.payload.val;
            state.todoList[action.payload.index].edit = false;
            state.todoList[action.payload.index].checked = false;
            return {
                todoList: [...state.todoList]
            }

        default: return state;
    }
}