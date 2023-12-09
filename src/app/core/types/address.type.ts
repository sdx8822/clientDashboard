import { GeolocationType } from "./geolocation.type";

export type AddressType = {
    city: string;
    geolocation: GeolocationType;
    number: number;
    street: string;
    zipcode: string;
};