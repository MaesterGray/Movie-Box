import {create} from 'zustand'
import { MovieProps } from '../types'

export type favouritesState={
    favouriteMovies:MovieProps[],
    favouriteSeries:MovieProps[],
    addtofavouriteMovies:(movie:MovieProps) => void
    addtofavouriteSeries:(serie:MovieProps) => void
    removeMovie:(movie:MovieProps) => void
    removeSerie:(serie:MovieProps) => void
}

const useFavourites = create<favouritesState>((set)=>({
    favouriteMovies:[],
    favouriteSeries:[],
    addtofavouriteMovies:(movie)=>set((state)=>({favouriteMovies:[...state.favouriteMovies,movie]})),
    addtofavouriteSeries:(serie)=>set((state)=>({favouriteSeries:[...state.favouriteSeries,serie]})),
    removeMovie:(movie)=>set((state)=>({favouriteMovies:state.favouriteMovies.filter((inview) => (movie.id !== inview.id ))})),
    removeSerie:(serie)=>set((state)=>({favouriteSeries:state.favouriteSeries.filter((inview)=>(serie.id !== inview.id))}))
}))

export default useFavourites