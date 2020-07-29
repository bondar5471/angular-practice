import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTH_SUCCESS = '[Auth] Login';
export const AUTH_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] SignupStart';
export const LOGOUT = '[Auth] Logout';
export const CLEAR_EROR = '[Auth] Clear error';
export const AUTO_LOGIN = '[Auth] Auto Login';

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class AuthFail implements Action {
  readonly type = AUTH_FAIL;
  constructor(public payload: string) {}
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class ClearError implements Action {
  readonly type = CLEAR_EROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions =
  | AuthSuccess
  | Logout
  | LoginStart
  | AuthFail
  | SignupStart
  | ClearError
  | AutoLogin;
