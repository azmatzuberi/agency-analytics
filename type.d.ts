interface Photo {
    id: Key | null | undefined,
    url: string
    filename: string
    createdAt: String,
    sizeInBytes: number
    description: string
    uploadedBy: string
    dimensions: {width: number, height: number}
    resolution: {width: number, height: number}
    updatedAt: String,
    favorited: boolean
}

type PhotoState = {
    photos: Photo[],
    photo: Photo
}

type PhotoAction = {
    type: string,
    photos: Photos,
    photo: Photo
}

type PhotoRemoveAction = {
    type: string
    photo: Photo
}

type Photos = {
    type: array,
    photos: Photo[]
}

type DispatchType = (args: PhotoAction) => PhotoAction