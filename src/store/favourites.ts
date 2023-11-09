import {create} from 'zustand'

type State ={
    favourites:[]
}

const useFavourites = create((set)=>({
    favouriteMovies:[],
    favouriteSeries:[],
    addtofavouriteMovies:(movie)=>set((state)=>({favouriteMovies:[...state.favouriteMovies,movie]})),
    addtofavouriteSeries:(serie)=>set((state)=>({favouriteSeries:[...state.favouriteSeries,serie]})),
    removeMovie:(movie)=>set((state)=>{const index= state.favouriteMovies.indexOf(movie);
                    return {favouriteMovies:state.favouriteMovies.splice(index,1)}})
}))

export default useFavourites