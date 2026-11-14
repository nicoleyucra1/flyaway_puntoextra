import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
export default function Layout() {
    const navigate = useNavigate();
    if (!localStorage.getItem('token')) return <Navigate to="/login" replace/>;
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };
    return (
        <div className="min-h-screen bg-base-200">
            <nav className="navbar bg-primary text-primary-content px-6">
                <Link to="/songs" className="flex-1 text-xl font-bold">Fly Away</Link>
                <div className="flex gap-2">
                    <Link to="/songs" className="btn btn-ghost btn-sm">Álbumes</Link>
                    <Link to="/favorites" className="btn btn-ghost btnsm">Favoritos</Link>
                    <button onClick={logout} className="btn btn-sm">Salir</button>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}
