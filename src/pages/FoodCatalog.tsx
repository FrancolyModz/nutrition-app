const foods = [
  { id: 1, name: 'Combo Burger', restaurant: 'McDrive', kcal: 850, protein: 35, carbs: 90, fat: 42 },
  { id: 2, name: 'Pollo Frito', restaurant: 'KFC', kcal: 720, protein: 45, carbs: 60, fat: 35 },
  { id: 3, name: 'Pizza Mediana', restaurant: 'Dominos', kcal: 900, protein: 30, carbs: 110, fat: 40 },
]

export default function FoodCatalog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catálogo de Combos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div key={food.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-bold text-gray-900">{food.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{food.restaurant}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Calorías:</span>
                <span className="font-bold text-primary">{food.kcal} kcal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Proteína:</span>
                <span className="font-bold text-secondary">{food.protein}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carbos:</span>
                <span className="font-bold text-warning">{food.carbs}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Grasas:</span>
                <span className="font-bold text-success">{food.fat}g</span>
              </div>
            </div>
            
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-orange-600 transition">
              Agregar a mi día
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
