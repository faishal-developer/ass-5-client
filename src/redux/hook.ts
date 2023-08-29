import { RootState, appDispatch } from "./store";
import {useDispatch,useSelector} from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";

export const useAppDispatch:()=>appDispatch=useDispatch;

export const useAppSelector:TypedUseSelectorHook<RootState>= useSelector;