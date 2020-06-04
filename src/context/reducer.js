import { FILTER } from "./types";
export default (state, { type, payload }) => {
    switch (type) {
            case FILTER:
                return {
                    ...state,
                    // filters: {...state.filters, payload}
                    filters:payload
                }       
        default:
            return state
    }
}