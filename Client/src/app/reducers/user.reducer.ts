import { createReducer, on } from '@ngrx/store'
import { User } from '../models/user'
import { login, logout } from '../actions/user.actions'

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

export const userReducer = createReducer(
    initialState,
    on(login, (state, action) => {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }
    ),
    on(logout, (state, action) => {
        return initialState
    }
    )
)