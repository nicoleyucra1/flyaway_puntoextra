import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<Layout/>}>
          {/* Aquí irán las rutas privadas (sección 6b) */}      
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}