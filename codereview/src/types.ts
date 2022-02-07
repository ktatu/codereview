export type RelativePath = Array<string> | string

export type UploadType = "file" | "folder"

export type ReviewTabValue = "files" | "description" | "errors" | "screenshots"

// relPath is only used for folder uploads
// though it's added to FileUploads for easier mapping of array in FileHandler
// File upload handling types / logic should be refactored later
export interface FileUpload {
    name: string,
    fileContent: string,
    relPath: RelativePath
}

export interface FolderTree {
    rootFolderName: string,
    children: Array<FolderTreeNode>
}

export interface FolderTreeNode {
    name: string,
    children?: Array<FolderTreeNode>,
    fileContent?: string,
    relPath: string
}

export type InputSectionTitle = "Code" | "Description" | "Errors" | "Screenshots"