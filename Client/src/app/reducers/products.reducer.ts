import { ActionsSubject, createReducer, on } from '@ngrx/store'
import { Product } from '../models/product'
import { getProduct, getProducts, setProduct, setProducts } from '../actions/products.actions'
import { Action } from 'rxjs/internal/scheduler/Action';

const initialState: Product[] = [];

export const productReducer = createReducer(
    initialState,
    on(getProducts, (state) => {
        return state;
    }),
    on(setProducts, (state, actions) => {
        return actions.Products;
    }),
    on(getProduct, (state, actions) => {
        return actions.Product;
    }),
    on(setProduct, (state, actions) => {
        return actions.Product;
    })

)