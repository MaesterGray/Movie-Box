import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  };
export default function useCategoryFetch(category:string){

    const data = useQuery({
        queryKey:[category],
        queryFn: async ()=>{
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${category}`,{
            headers:headers
          })
                if (response.data) {
                  return response.data  
                }console.log(response.status)
        }
       
    })

        
    return data
}

export function useGenreListMovies (){
  const data = useQuery({
    queryKey:['genrelist'],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
            }console.log(response.status)
    }
   
})

return data
}

export function useTrendingFetch(){
  const data = useQuery({
    queryKey:['trending'],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
            }console.log(response.status)
    }
   
})

return data
}

export function useSearchFetch(query:string){
  const data = useQuery({
    queryKey:['search',query],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
            }console.log(response.status)
    }
   
})

return data
}

export function useTvSeriesSearch(query:string){
  const data = useQuery({
    queryKey:['seriessearch',query],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,{
        headers:headers
      })
        if(response.data){
          return response.data
        }console.log(response.status)
    }
  })

  return data
}

export function useMovieId(movieid:string|undefined){
  const data = useQuery({
    queryKey:['single',movieid],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
            }console.log(response.status)
    }
   
})

return data
}

export function useRecommendation(movieid:string|undefined){
  const data = useQuery({
    queryKey:['recommendations',movieid],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
    }
   
})
return data
}

export function useCastAndCrew(movieid:string|undefined,variant:string){
  const data = useQuery({
    queryKey:['Topcast',movieid],
    queryFn: async ()=>{
      if (variant==='Movies') {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
      }else {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${movieid}/credits?language=en-US`,{
          headers:headers
        })
              if (response.data) {
                return response.data  
                
              }console.log(response.status)
      }
      
    }
   
})
return data

}

export function useSerieCastAndCrew(serieid:string){
  const data = useQuery({
    queryKey:['Topcast',serieid],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${serieid}/credits?language=en-US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
    }
   
})
return data
}

export function useTrendingSeries(){
  const data = useQuery({
    queryKey:['trending-series',],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
    }
   
})
return data

}
export function useCategorySeries(category:string){
  const data = useQuery({
    queryKey:['categories',],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?first_air_date_year=2023&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${category}&with_origin_country=US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
    }
   
})
return data

}

export function useSerieId(serieid:string|undefined){
  const data = useQuery({
    queryKey:['single',serieid],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${serieid}?language=en-US`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
            }console.log(response.status)
    }
   
})

return data
}

export function useRecommendationSeries(serieid:string){
  const data = useQuery({
    queryKey:['recommendations',serieid],
    queryFn: async ()=>{
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${serieid}/recommendations?language=en-US&page=1`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
    }
   
})
return data
}

