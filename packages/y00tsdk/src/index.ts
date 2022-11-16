import axios from 'axios';

import { TBackgrounds, TFace, TFur, TClothes, THead, TEyeWear, T1of1 } from '../types/traits';

const API_URL: string = 'https://api.y00ts.com';

export interface TY00t {
    attributes: TY00tAttribute[] | null;
    image: string;
    name: string;
    id: number;
    minted: boolean;
    mintAddress: string;
}

export interface TY00tAttribute {
    trait_type: string;
    value: string;
}

export interface TY00tResponse {
    pageNumberLimit: number;
    success: boolean;
    y00ts: TY00t[];
}

export interface AttributeFilters {
    attributeFilters?: AttributeFilters;
}

export interface AttributeFilters {
    background?: TBackgrounds[] | null;
    fur?: TFur[] | null;
    face?: TFace[] | null;
    clothes?: TClothes[] | null;
    head?: THead[] | null;
    eyewear?: TEyeWear[] | null;
    '1/1'?: T1of1[] | null;
}

type TGetAllY00ts = {
    pageNumber?: number;
    pageSize?: number;
    id?: number | string | null;
    attributeFilters?: AttributeFilters;
};

export const getY00ts = ({
    pageNumber = 1,
    pageSize = 25,
    attributeFilters = {},
    id = null,
}: TGetAllY00ts): Promise<TY00tResponse> => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/y00ts/getY00ts`, {
                pageNumber: pageNumber,
                pageSize: pageSize,
                attributeFilters,
                id,
            })
            .then((resp) => {
                resolve(resp.data);
            })
            .catch(reject);
    });
};

interface TY00tByIdResponse {
    success: boolean;
    y00t: TY00t;
}

export const getY00tById = (id: number | string): Promise<TY00tByIdResponse> => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}/y00ts/${id}`)
            .then((resp) => {
                resolve(resp.data);
            })
            .catch(reject);
    });
};

export default { getY00ts };
