import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest } from '../services';
import { getErrorMessage } from '../api';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const data = await loginRequest({ email, password });
            localStorage.setItem('token', data.token);
            navigate('/flights');
        } catch (err) {
            setError(getErrorMessage(err));
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form onSubmit={handleSubmit} className="card bg-base-100 shadow w-80">
                <div className="card-body gap-3">
                    <h1 className="card-title text-2xl">Iniciar sesión</h1>
                    {error && <div className="alert alert-error">{error}</div>}
                    <input type="email" placeholder="Email" required value={email}
                        onChange={(e) => setEmail(e.target.value)} className="input w-full" />
                    <input type="password" placeholder="Contraseña" required value=
                        {password}
                        onChange={(e) => setPassword(e.target.value)} className="input w-full" />
                    <button className="btn btn-primary">Ingresar</button>
                    <p>¿No tienes cuenta? <Link to="/register" className="link link-primary">Regístrate</Link></p>
                </div>
            </form>
        </div>
    );
}