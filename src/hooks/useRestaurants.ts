import { useState } from 'react'
import { ComboItem } from '../types'

const mcdonaldsChile: ComboItem[] = [
  {
    id: 'mc-1',
    name: 'Combo Cuarto de Libra',
    restaurant: 'McDonald\'s',
    description: 'Hamburguesa 1/4 lb con papas y bebida',
    macros: { kcal: 950, protein: 48, carbs: 85, fat: 45 },
    price: 8900,
    currency: 'CLP',
  },
  {
    id: 'mc-2',
    name: 'Combo Big Mac',
    restaurant: 'McDonald\'s',
    description: 'Dos hamburguesas con lechuga, queso y salsa especial',
    macros: { kcal: 860, protein: 42, carbs: 80, fat: 40 },
    price: 8500,
    currency: 'CLP',
  },
  {
    id: 'mc-3',
    name: 'Combo McNuggets 9 pzas',
    restaurant: 'McDonald\'s',
    description: '9 nuggets de pollo crujientes',
    macros: { kcal: 720, protein: 35, carbs: 70, fat: 32 },
    price: 7900,
    currency: 'CLP',
  },
  {
    id: 'mc-4',
    name: 'Combo Pollo Crispy',
    restaurant: 'McDonald\'s',
    description: 'Sándwich de pollo frito dorado',
    macros: { kcal: 890, protein: 45, carbs: 75, fat: 42 },
    price: 8200,
    currency: 'CLP',
  },
  {
    id: 'mc-5',
    name: 'Combo McSpicy',
    restaurant: 'McDonald\'s',
    description: 'Pollo picante con salsa chipotle',
    macros: { kcal: 820, protein: 38, carbs: 78, fat: 38 },
    price: 8300,
    currency: 'CLP',
  },
  {
    id: 'mc-6',
    name: 'Combo Doble Cuarto de Libra',
    restaurant: 'McDonald\'s',
    description: 'Dos hamburguesas 1/4 lb cada una',
    macros: { kcal: 1150, protein: 65, carbs: 90, fat: 55 },
    price: 9800,
    currency: 'CLP',
  },
  {
    id: 'mc-7',
    name: 'Combo Filete de Pollo',
    restaurant: 'McDonald\'s',
    description: 'Filete de pollo a la parrilla',
    macros: { kcal: 750, protein: 40, carbs: 72, fat: 30 },
    price: 7800,
    currency: 'CLP',
  },
  {
    id: 'mc-8',
    name: 'Combo Sándwich de Lechuga',
    restaurant: 'McDonald\'s',
    description: 'Hamburguesa envuelta en lechuga',
    macros: { kcal: 520, protein: 28, carbs: 45, fat: 20 },
    price: 6900,
    currency: 'CLP',
  },
  {
    id: 'mc-9',
    name: 'Combo Hamburguesa Clásica',
    restaurant: 'McDonald\'s',
    description: 'La clásica hamburguesa McDonald\'s',
    macros: { kcal: 650, protein: 32, carbs: 65, fat: 28 },
    price: 6500,
    currency: 'CLP',
  },
  {
    id: 'mc-10',
    name: 'Combo Doble Hamburguesa',
    restaurant: 'McDonald\'s',
    description: 'Dos hamburguesas clásicas',
    macros: { kcal: 750, protein: 42, carbs: 68, fat: 35 },
    price: 7200,
    currency: 'CLP',
  },
  {
    id: 'mc-11',
    name: 'Combo Chicken Tenders 3 pzas',
    restaurant: 'McDonald\'s',
    description: 'Tiras de pollo empanizadas',
    macros: { kcal: 580, protein: 30, carbs: 55, fat: 25 },
    price: 7500,
    currency: 'CLP',
  },
  {
    id: 'mc-12',
    name: 'Combo McFlurry + Hamburguesa',
    restaurant: 'McDonald\'s',
    description: 'Helado suave con galletas y hamburguesa',
    macros: { kcal: 680, protein: 25, carbs: 95, fat: 22 },
    price: 7100,
    currency: 'CLP',
  },
  {
    id: 'mc-13',
    name: 'Combo Ensalada Pollo',
    restaurant: 'McDonald\'s',
    description: 'Ensalada fresca con pechuga de pollo',
    macros: { kcal: 420, protein: 35, carbs: 32, fat: 15 },
    price: 8200,
    currency: 'CLP',
  },
  {
    id: 'mc-14',
    name: 'Combo Wrap Pollo Chipotle',
    restaurant: 'McDonald\'s',
    description: 'Wrap de pollo con salsa chipotle',
    macros: { kcal: 620, protein: 38, carbs: 58, fat: 24 },
    price: 7900,
    currency: 'CLP',
  },
  {
    id: 'mc-15',
    name: 'Combo Fish & Chips',
    restaurant: 'McDonald\'s',
    description: 'Filete de pescado con papas fritas',
    macros: { kcal: 890, protein: 32, carbs: 95, fat: 40 },
    price: 8600,
    currency: 'CLP',
  },
]

export const useRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState('all')

  const allCombos = [...mcdonaldsChile]

  const restaurants = Array.from(new Set(allCombos.map((combo) => combo.restaurant)))

  const filteredCombos = allCombos.filter((combo) => {
    const matchesSearch =
      combo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      combo.description?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRestaurant = selectedRestaurant === 'all' || combo.restaurant === selectedRestaurant

    return matchesSearch && matchesRestaurant
  })

  return {
    allCombos,
    filteredCombos,
    restaurants,
    searchTerm,
    setSearchTerm,
    selectedRestaurant,
    setSelectedRestaurant,
  }
}
