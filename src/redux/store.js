import { createStore } from "redux"
const CLICK = "CLICK"
const initalState = {
    likes: 5
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                likes: state.likes+1
            }

        default:  return state;
    }
}
const store = createStore(reducer)
export const onIncrementiks = () => ({ type: CLICK });
export default store