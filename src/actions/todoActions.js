
export function addItem(item) {
    console.log('todo actions::', item);
    return {
        type: 'ADD_ITEM',
        item
    }
}

export function checkedItem(index) {
    return {
        type: 'CHECKED_ITEM',
        index
    }
}

export function deleteItem(index) {
    return {
        type: 'DELETE_ITEM',
        index
    }
}

export function editItem(index) {
    return {
        type: 'EDIT_ITEM',
        index
    }
}

export function cancelEdit(index) {
    return {
        type: 'CANCEL_EDIT',
        index
    }
}
export function editListValue(val, index) {
    return {
        type: 'EDIT_LIST_VALUE',
        payload: { val, index }
    }
}