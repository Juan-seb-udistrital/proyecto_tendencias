'use client'

import ChartBestScore from 'components/ChartBestScore'
import { useEffect, useState } from 'react'

const InteractionPage = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/v1/category/?country=MCO')
        const json = await res.json()

        setCategories(json)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories()
  }, [])

  return (
    <section className='grid w-[80vw] h-screen grid-cols-2 bg-gradient-to-r  from-[#574a47] to-[#472f38]'>
      {
        categories
          ? (
            <>
              <ChartBestScore categories={categories} type='best' title='Vendedores con mejores calificaciones' />
              <ChartBestScore categories={categories} type='worst' title='Vendedores con peores calificaciones' />
            </>
            )
          : (
            <p>Cargando</p>
            )
      }
    </section>
  )
}

export default InteractionPage
