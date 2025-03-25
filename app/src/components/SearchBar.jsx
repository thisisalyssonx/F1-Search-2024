// src/components/SearchBar.jsx
import React from 'react'

const SearchBar = ({ busca, setBusca }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Pesquisar piloto..."
        className="w-full max-w-md p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
    </div>
  )
}

export default SearchBar
