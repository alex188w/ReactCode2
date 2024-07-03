const dataReducer = (state = '', action) => {
    switch (action.type) {
        case 'DATA_LOADED':
            return action.payload;
        case 'LOAD_DATA_FAILED':
            return 'failed to load data';
        default:
            return state;
    }
};
export default dataReducer;