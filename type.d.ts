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
    favorited: boolean,
    index: number
}

interface Photos {
    [x: string]: any;
    findIndex(arg0: (x: any) => boolean): unknown;
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

interface PhotosAction {
    type: String,
    photos: Photos
    PhotosVar: any
}

type PhotoAction = {
    type: String,
    photo: Photo,
}

type FavoritesAction = {
    type: String,
    favorites: Photos,
}

type FavoriteAction = {
    type: String,
    favorite: Photo,
}

type DispatchType = (args: PhotoAction) => PhotoAction
type DispatchPhotosType = (args: PhotosAction) => PhotosAction
type DispatchFavoriteType = (args: FavoriteAction) => FavoriteAction
type DispatchFavoritesType = (args: FavoritesAction) => FavoritesAction