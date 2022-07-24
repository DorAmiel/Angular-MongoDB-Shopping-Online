import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { User } from "../models/user";

// Section 2
export const LOGIN = '[USER] Login';
export const LOGOUT = '[USER] Logout';

// Section 3
export class LoginUser implements Action {
    readonly type = LOGIN

    constructor(public payload: User) { }
}

export class LogoutUser implements Action {
    readonly type = LOGOUT

    constructor(public payload: User) { }
}

// Section 4
export type Actions = LoginUser | LogoutUser