import { Category } from "./Category"

export interface Dish {
    "dish_id": number,
    "name": string,
    "category"?: Category,
    "created_on": string,
    "updated_on": string
}