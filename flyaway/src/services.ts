import { api } from './api';
import type {LoginRequest, RegisterRequest, AuthResponse, IdResponse, User, FlightSearchResponse, BookFlightRequest, Booking, FlightsSearchParams,
} from './types';


export async function loginRequest(data: LoginRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/auth/login', data);
    return res.data;
}

export async function registerRequest(data: RegisterRequest): Promise<IdResponse> {
    const res = await api.post<IdResponse>('/users/register', data);
    return res.data;
}

export async function getCurrentUser(): Promise<User> {
    const res = await api.get<User>('/users/current');
    return res.data;
}

export async function getFlights(params: FlightsSearchParams): Promise<FlightSearchResponse> {
    const res = await api.get<FlightSearchResponse>('/flights/search', {params});
    return res.data;
}

export async function bookRequest(data: BookFlightRequest): Promise<IdResponse> {
    const res = await api.post<IdResponse>('/flights/book', data);
    return res.data;
}

export async function getBooking(id: number): Promise<Booking> {
    const res = await api.get<Booking>(`/flights/book/${id}`);
    return res.data;
}
