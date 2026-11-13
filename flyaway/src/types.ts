export interface LoginRequest { 
    email: string; 
    password: string; 
}

export interface RegisterRequest {
    email: string; 
    firstName: string;
    lastName: string; 
    password: string;
}

export interface IdUsuario {
    id: number;
}

export interface ProblemDetail {
    title: string;
    status: number;
    detail: string;
    instance: string;
}

export interface AuthResponse { 
    token: string; 
}

export interface Current {
    id: number; 
    username: string; 
    email: string; 
    firstName: string;
    role: string;
}

export interface User {
    id: number; 
    username: string; 
    email: string; 
    firstName: string;
    lastName: string;
    role: string;
}


export interface Flight { 
    airlineName: string;
    flightNumber: string;
    estDepartureTime: string;
    estArrivalTime: string;
    availableSeats: number; 
}

export interface ManyFlights {
    input: Flight[]
}

export interface FlightById {
    id: number;
}