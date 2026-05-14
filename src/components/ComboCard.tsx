import { ComboItem } from '../types'
import { useState } from 'react'

interface ComboCardProps {
  combo: ComboItem
}

export default function ComboCard({ combo }: ComboCardProps) {
  const [quantity, setQuantity] = useState(1)

  const calculateTotals = (qty: number) => {
    return {
      kcal: combo.macros.kcal * qty,
      protein: combo.macros.protein * qty,
      carbs: combo.macros.carbs * qty,
      fat: combo.macros.fat * qty,
    }
  }

  const totals = calculateTotals(quantity)

  const handleAddToDay = () => {
    // TODO: Implementar agregar a tracking diario
    console.log(`Agregado: ${combo.name} x${quantity}`)
  }

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{combo.name}</h3>
        <p className="text-sm text-gray-500">{combo.restaurant}</p>
        {combo.description && (
          <p className="text-sm text-gray-600 mt-2 italic">{combo.description}</p>
        )}
      </div>

      {/* Macros por porción */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-xs text-gray-500 mb-2 font-semibold">POR PORCIÓN</p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-gray-600 text-xs">Calorías:</span>
            <p className="font-bold text-primary">{combo.macros.kcal} kcal</p>
          </div>
          <div>
            <span className="text-gray-600 text-xs">Proteína:</span>
            <p className="font-bold text-secondary">{combo.macros.protein}g</p>
          </div>
          <div>
            <span className="text-gray-600 text-xs">Carbos:</span>
            <p className="font-bold text-warning">{combo.macros.carbs}g</p>
          </div>
          <div>
            <span className="text-gray-600 text-xs">Grasas:</span>
            <p className="font-bold text-success">{combo.macros.fat}g</p>
          </div>
        </div>
      </div>

      {/* Selector de cantidad */}
      <div className="mb-4 flex items-center gap-2">
        <label className="text-sm text-gray-600">Cantidad:</label>
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          −
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-12 text-center border border-gray-300 rounded py-1"
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Totales con cantidad */}
      {quantity > 1 && (
        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 mb-2 font-semibold">TOTAL (x{quantity})</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-600 text-xs">Calorías:</span>
              <p className="font-bold text-primary">{totals.kcal} kcal</p>
            </div>
            <div>
              <span className="text-gray-600 text-xs">Proteína:</span>
              <p className="font-bold text-secondary">{totals.protein}g</p>
            </div>
            <div>
              <span className="text-gray-600 text-xs">Carbos:</span>
              <p className="font-bold text-warning">{totals.carbs}g</p>
            </div>
            <div>
              <span className="text-gray-600 text-xs">Grasas:</span>
              <p className="font-bold text-success">{totals.fat}g</p>
            </div>
          </div>
        </div>
      )}

      {/* Precio */}
      {combo.price && (
        <div className="mb-4 text-right">
          <p className="text-sm text-gray-600">
            Precio: <span className="font-bold text-lg">${combo.price.toLocaleString()}</span>
          </p>
        </div>
      )}

      <button
        onClick={handleAddToDay}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
      >
        Agregar a mi día
      </button>
    </div>
  )
}
