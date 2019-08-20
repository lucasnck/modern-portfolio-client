const INITIAL_STATE = {
    modal: {
        status: ''
    }
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                ...state, 
                modal: { 
                    status: state.modal.status == "active" ? '' : 'active' 
                }
            }
        default:
            return state
    }

}