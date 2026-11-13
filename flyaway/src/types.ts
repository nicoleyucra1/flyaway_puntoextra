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

export interface IdResponse {
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

export interface User {
    id: number; 
    username: string; 
    email: string; 
    firstName: string;
    lastName: string;
    role: string;
}


export interface Flight { 
    id: number;
    airlineName: string;
    flightNumber: string;
    estDepartureTime: string;
    estArrivalTime: string;
    availableSeats: number; 
}

export interface FlightSearchResponse {
    items: Flight[]
}

export interface BookFlightRequest {
    flightId: number;
}

export interface Booking {
    id: number;
    bookingDate: string;
    flightId: number;
    flightNumber: string;
    airlineName: string;
    estDepartureTime: string;
    estArrivalTime: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string; 
}