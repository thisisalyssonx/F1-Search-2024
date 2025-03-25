// src/App.jsx
import React, { useState } from 'react'
import PilotoList from './components/PilotoList'
import SearchBar from './components/SearchBar'

const App = () => {
  const [busca, setBusca] = useState('')

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-[#ff1801] mb-4">
          F1 Search 2024
        </h1>
        <SearchBar busca={busca} setBusca={setBusca} />
      </header>
      <main className="max-w-4xl mx-auto">
        <PilotoList busca={busca} />
      </main>
    </div>
  )
}

export default App
