
import axios, { type AxiosInstance } from 'axios';

export abstract class ServiceBase { 
    protected api: AxiosInstance;

    constructor(useToken: boolean = false) {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (useToken) {
            this.api.interceptors.request.use(async (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
        }
    }
}