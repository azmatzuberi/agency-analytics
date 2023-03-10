// Types file

// Photo interface
interface Photo {
    id: Key | null | undefined,
    url: string,
    filename: string,
    createdAt: String,
    sizeInBytes: number,
    description: String,
    uploadedBy: String,
    dimensions: {width: number, height: number},
    resolution: {width: number, height: number},
    updatedAt: String,
    favorited: boolean
}

interface Photos {
    photos: Photo[],
    map: Function,
}
interface Favorite {
   favorite: {}
}

interface Favorites {
    favorites: Photos,
    map: Function
}

type PhotoState = {
    photos: Array,
    photo: Photo,
    favorites: Array,
    favorite: Object
}

type PhotosAction = {
    type: String,
    photos: Photos
}

type PhotoAction = {
    type: String,
    photo: Photo
}

type FavoritesAction = {
    type: String,
    favorites: Photos
}

type FavoriteAction = {
    type: String,
    favorite: Photo
}

// Dispatch types
type DispatchType = (args: PhotoAction) => PhotoAction
type DispatchPhotosType = (args: PhotosAction) => PhotosAction
type DispatchFavoriteType = (args: FavoriteAction) => FavoriteAction
type DispatchFavoritesType = (args: FavoritesAction) => FavoritesAction