import axios from "axios";

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'
axios.defaults.headers = {
  'Content-Type': 'application/json',
}
export const AuthService = {
  async login(email, password) {
    return axios.post('auth/login', {email, password})
  }

}