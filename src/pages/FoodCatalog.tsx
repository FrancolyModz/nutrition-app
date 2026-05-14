import DetailedComboCard from '../components/DetailedComboCard'
import { useDetailedCombos } from '../hooks/useDetailedCombos'

export default function FoodCatalog() {
  const { filteredCombos, restaurants, searchTerm, setSearchTerm, selectedRestaurant, setSelectedRestaurant } = useDetailedCombos()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">🍔 Menú de McDonald's Chile</h1>
      <p className="text-gray-600 mb-8">
        Haz click en cualquier combo para ver todos los detalles nutricionales de cada producto.
      </p>

      {/* Buscador */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="🔍 Buscar combo (ej: Doble Cuarto, Big Mac, Pollo...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filtro por restaurante */}
        <select
          value={selectedRestaurant}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">Todos los restaurantes</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant} value={restaurant}>
              {restaurant}
            </option>
          ))}
        </select>
      </div>

      {/* Info de resultados */}
      <div className="mb-6 text-sm text-gray-600">
        <p>Mostrando {filteredCombos.length} combo(s)</p>
      </div>

      {/* Grid de combos */}
      {filteredCombos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCombos.map((combo) => (
            <DetailedComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <p className="text-yellow-800 text-lg">
            😕 No se encontraron combos que coincidan con tu búsqueda
          </p>
          <p className="text-yellow-600 text-sm mt-2">Intenta con otros términos</p>
        </div>
      )}
    </div>
  )
}
