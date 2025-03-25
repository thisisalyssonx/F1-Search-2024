// src/components/PilotoList.jsx
import React from 'react'
import PilotoCard from './PilotoCard'

// Exemplo de dados estáticos
const pilotos = [
  "Lewis Hamilton",
  "Max Verstappen",
  "Charles Leclerc",
  "Sergio Pérez",
  "Lando Norris",
  "Fernando Alonso",
  "Esteban Ocon",
  "George Russell",
  "Carlos Sainz",
  "Pierre Gasly",
  "Valtteri Bottas",
  "Daniel Ricciardo",
  "Kevin Magnussen",
  "Alexander Albon",
  "Yuki Tsunoda",
  "Lance Stroll",
  "Nicholas Latifi",
  "Oscar Piastri",
  "Nyck de Vries",
  "Zhou Guanyu"
]

const PilotoList = ({ busca }) => {
  const pilotosFiltrados = pilotos.filter(piloto =>
    piloto.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {pilotosFiltrados.map((nome, index) => (
        <PilotoCard key={index} nomePiloto={nome} />
      ))}
    </div>
  )
}

export default PilotoList
