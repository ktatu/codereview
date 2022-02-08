import { createContext, useReducer } from "react"
import { FileUpload, FolderTree } from "../types"
import { Action } from "./actions"

import reviewReducer from "./reducer"

export interface ReviewState {
    files: FileUpload[],
    folders: FolderTree[],
}

type ReviewStateProviderProps = {
    reducer: React.Reducer<ReviewState, Action>;
    children: React.ReactElement;
}

const initialReviewState: ReviewState = {
    files: [],
    folders: []
}

const ReviewContext = createContext<[ReviewState, React.Dispatch<Action>]>([initialReviewState, () => initialReviewState])

const ReviewStateProvider = ({ children, reducer }: ReviewStateProviderProps) => {
    const [reviewState, dispatch] = useReducer(reviewReducer, initialReviewState)
}
