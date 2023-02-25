interface Photo {
    id: Key | null | undefined;
    image: number
    name: string
    size: string
    url: string
    filename: string
    createdAt: Date
    sizeInBytes: number
    description: string
    uploadedBy: string
    dimensions: {width: number, height: number}
    resolution: {width: number, height: number}
    updatedAt: Date
    favorited: boolean
    map: Function
}

type PhotoState = {
    photos: Photo[]
}

type PhotoAction = {
    type: string
    photos: Photos
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