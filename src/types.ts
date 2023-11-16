export type MovieProps ={
    image:string,
    title:string,
    rating:number,
    debut:string,
    id:number
    genres:[
      id:number,
      name:string
    ],
    variants:'Movie'|'Tv-serie'
    
    }