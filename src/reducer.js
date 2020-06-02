
const initialState = {
    mylabel: "firstlabel",
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "UPDATE_LABEL": {
            let d= new Date();
            return { ...state, mylabel: "label" + d.getTime() }
        };
        default:
            return state;
    }
};

export default reducer;