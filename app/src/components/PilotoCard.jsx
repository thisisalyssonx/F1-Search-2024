// src/components/PilotoCard.jsx
import React, { useState } from 'react'
import PilotoDetalhes from './PilotoDetalhes'

const PilotoCard = ({ nomePiloto }) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold mb-2 text-black">{nomePiloto}</h2>

      <button
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
        className="text-blue-500 hover:underline"
      >
        {mostrarDetalhes ? "Ocultar detalhes" : "Ver detalhes"}
      </button>
      {mostrarDetalhes && <PilotoDetalhes nomePiloto={nomePiloto} />}
    </div>
  )
}

export default PilotoCard
