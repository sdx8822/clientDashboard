import { AddressType, NameType } from "src/app/core/types";

export class UserModel implements IUserInterface {
    constructor(obj?: IUserInterface) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
    
    address: AddressType;
    email: string;
    id: number;
    name: NameType;
    password: string;
    phone: string;
    username: string;
}

export interface IUserInterface {
    address: AddressType;
    email: string;
    id: number;
    name: NameType;
    password: string;
    phone: string;
    username: string;
}