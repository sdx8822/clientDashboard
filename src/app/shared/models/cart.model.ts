import { RatingType } from "src/app/core/types";

export class CartModel implements ICartInterface {
    constructor(obj?: ICartInterface) {
        if(obj) {
            Object.assign(this, obj);
        }
    }

    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: RatingType;
    title: string;
}

export interface ICartInterface {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: RatingType;
    title: string;
}
