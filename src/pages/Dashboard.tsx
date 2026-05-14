export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-semibold">Calorías Hoy</h3>
          <p className="text-3xl font-bold text-primary mt-2">1,250</p>
          <p className="text-sm text-gray-500 mt-1">de 2,000 kcal</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-semibold">Proteína</h3>
          <p className="text-3xl font-bold text-secondary mt-2">85g</p>
          <p className="text-sm text-gray-500 mt-1">de 150g</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-semibold">Carbos</h3>
          <p className="text-3xl font-bold text-warning mt-2">120g</p>
          <p className="text-sm text-gray-500 mt-1">de 250g</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-600 text-sm font-semibold">Grasas</h3>
          <p className="text-3xl font-bold text-success mt-2">45g</p>
          <p className="text-sm text-gray-500 mt-1">de 65g</p>
        </div>
      </div>
    </div>
  )
}
