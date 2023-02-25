import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import type {RootState, AppDispatch} from "@/store/store-update"

// use throughout your app instead of useDispatch and useSelector

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector