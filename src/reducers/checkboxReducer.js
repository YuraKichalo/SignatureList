const INITIAL_STATE = {
    isActive: null,
    selectedItems: []
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'IS_ACTIVE':
            return {
                ...state,
                isActive: true,
                selectedItems: [...state.selectedItems, action.payload]
            };
        case 'IS_NOT_ACTIVE':
            return {
                ...state,
                isActive: state.selectedItems.length>1 ? true : false,
                selectedItems: state.selectedItems.filter(item => item !== action.payload)
            };
        default:
            return INITIAL_STATE;
    }
};