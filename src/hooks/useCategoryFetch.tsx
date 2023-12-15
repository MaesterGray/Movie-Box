import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  };
export default function useDiscover(page:number,variant:string){

    const data = useQuery({
        queryKey:['list',page,variant],
        queryFn: async ()=>{
          if (variant ==='Movies') {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=Action`,{
            headers:headers
          })
                if (response.data) {
                  return response.data  
                }console.log(response.status)
        }
        else {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?first_air_date_year=2023&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_origin_country=US`,{
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



export function useTrendingFetch(variant:string){
  const data = useQuery({
    queryKey:['trending',variant],
    queryFn: async ()=>{
      if (variant==='Movies') {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`,{
          headers:headers
        })
              if (response.data) {
                return response.data  
              }console.log(response.status)
      }else{
        const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`,{
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

export function useMovieId(id:string|undefined,variant:string){

  
  const data = useQuery({
    queryKey:['single',id],
    queryFn: async ()=>{
      if (variant==='Movies') {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
            headers:headers
          })
                if (response.data) {
                  return response.data  
                }console.log(response.status)
      }else{
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?language=en-US`,{
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



export function useRecommendation(id:string|undefined,variant:string){
  const data = useQuery({
    queryKey:['recommendations',id],
    queryFn: async ()=>{
      if (variant==='Movies') {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,{
        headers:headers
      })
            if (response.data) {
              return response.data  
              
            }console.log(response.status)
      }else{
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`,{
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




export function useVideo(variant:string|undefined,id:string|undefined){
 const data = useQuery(
    {
      queryKey:['video',variant,id],
      queryFn: async ()=>{
        if (variant==='Movies') {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          {headers:headers})
          if (response.data) {
            return  response.data
          }else{
            console.log(response.status)
          }
        }else{
          const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,{headers:headers})
          if (response.data) {
            return response . data
          }else{
            console.log(response.status)
          }
        }
      }
    }
  )
  return data
}
