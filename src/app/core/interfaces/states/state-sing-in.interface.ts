import LoginResponse from "../auth/login-response.interface";

export default interface StateSignIn {
  response: LoginResponse | null,
  status: 'loading' | 'success' | 'error',

}
