import { ID } from '../../common/common';
import { ICategory } from '../category/ICategory';

export interface IProduct {
    id: ID;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: ICategory;
}
