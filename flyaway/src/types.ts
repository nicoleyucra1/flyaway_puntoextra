export interface LoginRequest { email: string; password: string; }
export interface RegisterRequest {
    email: string; password: string; name:
        string;
}
export interface AuthResponse { token: string; }
export interface Album {
    id: number; title: string; year: number; coverUrl:
        string;
}
export interface Song {
    id: number; title: string; duration: string; albumId:
        number;
}
export interface SongIdRequest { songId: number; }