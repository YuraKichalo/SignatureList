export const isActive = (index) => {
    return {
        type: 'IS_ACTIVE',
        payload: index
    };
};

export const isNotActive = (index) => {
    return {
        type: 'IS_NOT_ACTIVE',
        payload: index
    };
};

export const unSelected = () => {
    return {
        type: 'UNSELECTED'
    };
};

export const onDelete = (itemsToDelete) => {
    return {
        type: 'DELETE',
        payload: itemsToDelete
    };
};