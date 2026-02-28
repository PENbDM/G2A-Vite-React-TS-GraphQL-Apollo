// Define the shape of the data returning from your GraphQL server
export interface AuthPayload {
    token: string;
    user: {
        id: string;
        email: string;
    };
}

export  interface RegisterResponse {
    register: AuthPayload;
}

export interface LoginResponse {
    login: AuthPayload;
}