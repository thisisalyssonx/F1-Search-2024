// src/components/PilotoDetalhes.jsx
import React, { useState, useEffect } from 'react'

const PilotoDetalhes = ({ nomePiloto }) => {
  const [extract, setExtract] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch(
          `https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${encodeURIComponent(nomePiloto)}&format=json&origin=*`
        )
        const data = await response.json()
        const pages = data.query.pages
        const pageId = Object.keys(pages)[0]
        setExtract(pages[pageId].extract)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
        setExtract("<p>Erro ao carregar informações.</p>")
      } finally {
        setLoading(false)
      }
    }
    fetchDados()
  }, [nomePiloto])

  return (
    <div className="mt-4 p-3 bg-gray-50 rounded border text-black">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: extract }} />
      )}
    </div>
  )
}

export default PilotoDetalhes
