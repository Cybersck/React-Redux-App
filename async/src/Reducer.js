

export const initialState = {
    res: ''
  };

export const mainReducer = (state, action) => {


    switch(action.type) {
        case 'get':
            return {
                ...state,
                res: action.activity
            }
        default:
            return state;
    }
}