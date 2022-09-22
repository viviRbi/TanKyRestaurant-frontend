import { Dish } from "./Dish"


export interface Category extends Object{
    
        "category_id": number,
        "name": string,
        "dishes"?: Dish[],
        "created_on": string,
        "updated_on": string,
        "links": [
          {
            "rel"?: string,
            "href"?:string,
            "hreflang"?: string,
            "media"?: string,
            "title"?: string,
            "type"?: string,
            "deprecation"?: string,
            "profile"?: string,
            "name"?: string
          }
        ]
      
}