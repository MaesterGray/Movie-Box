
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Movie from './pages/Movie'
import Search from './pages/Search'
import './index.css'
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import Favourites from './pages/Favourites'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<LandingPage/>}/>
      <Route path='Movies/:movieId' element={<Movie variants='Movies'/>}/>
      <Route path='Tv-series/:movieId' element={<Movie variants='Tv-series'/>}/>
      <Route path='Search' element={<Search/>}/>
      <Route path='Favourites' element={<Favourites/>}/>
    </Routes>
      
    </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>

  )
}

export default App
