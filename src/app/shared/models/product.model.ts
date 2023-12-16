import { RatingType } from "src/app/core/types";

export class ProductModel implements IProductInterface {
    constructor(obj?: IProductInterface) {
        if(obj) {
            Object.assign(this, obj);

            if (obj.id) {
                this.productId = obj.id;
            }
        }
    }

   
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: RatingType;
    title: string;

    productId: number;
    quantity: number;
    isSelected: boolean;
}

export interface IProductInterface {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: RatingType;
    title: string;
}