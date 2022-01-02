import axios, { Axios } from "axios";


const instance = axios.create({
    baseURL: 'http://192.168.130.3:9091/transmission/rpc',
    auth: {
        'username': 'root',
        'password': 'inverz5445'
    }
  });

export default instance;
