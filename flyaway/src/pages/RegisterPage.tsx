import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../services';
import { getErrorMessage } from '../api';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!email.trim() || !firstName.trim() || !lastName.trim() || !password.trim()) {
            setError('Completa todos los campos');
            return;
        }
        try {
            await registerRequest({ email, firstName, lastName, password });
            setSuccess('Cuenta creada, ahora inicia sesión');    
            setTimeout(() => navigate('/login'), 1500);          
        } catch (err) {
            setError(getErrorMessage(err));
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form onSubmit={handleSubmit} className="card bg-base-100 shadow w-80">
                <div className="card-body gap-3">
                    <h1 className="card-title text-2xl">Crear cuenta</h1>
                    {error && <div className="alert alert-error">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    <input type="email" placeholder="Email" required value={email}
                        onChange={(e) => setEmail(e.target.value)} className="input w-full" />
                    <input placeholder="Nombre" required value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} className="input w-full" />
                    <input placeholder="Apellido" required value={lastName}
                        onChange={(e) => setLastName(e.target.value)} className="input w-full" />
                    <input type="password" placeholder="Contraseña" required value=
                        {password}
                        onChange={(e) => setPassword(e.target.value)} className="input w-full" />
                    <button className="btn btn-primary">Registrarme</button>
                    <p>¿Ya tienes cuenta? <Link to="/login" className="link link-primary">Inicia sesión</Link></p>
                </div>
            </form>
        </div>
    );
}