import { Action } from "./actions"
import { ReviewState } from "./reviewState"

const reviewReducer = (state: ReviewState, action: Action): ReviewState => {
    switch(action.type) {
        case "ADD_FILES":
            return {
                ...state,
                files: state.files.concat(action.payload)
            }
        case "ADD_FOLDER_TREE":
            return state
        default:
            return state
    }
}

export default reviewReducer