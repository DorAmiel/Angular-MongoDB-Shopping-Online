import { createAction, props } from '@ngrx/store';
// import { Product } from '../models/product';

export const getProduct = createAction('[Product] getProduct', props<{ Product: any }>());
export const setProduct = createAction('[Product] setProduct', props<{ Product: any }>());
export const getProducts = createAction('[Product] getProducts');
export const setProducts = createAction('[Product] setProducts', props<{ Products: any }>());
