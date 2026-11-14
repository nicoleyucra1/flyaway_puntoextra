import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import FlightsPage from './pages/FlightsPage';


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<Layout/>}>
        <Route path="/flights" element={<FlightsPage />} />      
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}