export default function FlightsPage() {
  const token = localStorage.getItem('token');

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold">Vuelos</h1>
      <p>{token ? 'Sesión iniciada ✅' : 'No has iniciado sesión'}</p>
    </div>
  );
}