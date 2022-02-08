export type Action = 
    {
        type: "ADD_FILES",
        payload: FileUpload | FileUpload[]
    } 
    | 
    {
        type: "ADD_FOLDER_TREE",
        payload: FolderTree
    }

export const addFiles = (payload: FileUpload | FileUpload[]): Action => {
    return {
        type: "ADD_FILES",
        payload: payload
    }
}