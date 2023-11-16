import {create} from 'zustand'

export type favouritesState={
    favouriteMovies:object[],
    favouriteSeries:object[],
    addtofavouriteMovies:(movie:object) => void
    addtofavouriteSeries:(serie:object) => void
}

const useFavourites = create<favouritesState>((set)=>({
    favouriteMovies:[],
    favouriteSeries:[],
    addtofavouriteMovies:(movie)=>set((state)=>({favouriteMovies:[...state.favouriteMovies,movie]})),
    addtofavouriteSeries:(serie)=>set((state)=>({favouriteSeries:[...state.favouriteSeries,serie]})),
    //removeMovie:(movie)=>set((state)=>{const index= state.favouriteMovies.indexOf(movie);
                    //return {favouriteMovies:state.favouriteMovies.splice(index,1)}})
}))

export default useFavourites