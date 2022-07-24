import { Action } from '@ngrx/store'
import { User } from '../models/user'
import * as UserActions from '../actions/user.actions'

// Section 1
const initialState: User = {
    firstName: "",
    lastName: "",
    username: "",
    idNumber: 0,
    password: "",
    city: "",
    street: "",
    role: "user",
    cartId: "",
}

// Section 2
export function reducer(state: User[] = [initialState], action: UserActions.Actions) {
    // Section 3
    switch (action.type) {
        case UserActions.LOGIN:
            return [...state, action.payload]
        case UserActions.LOGOUT:
            return [...state, action.payload]
        default:
            return state;
    }
}