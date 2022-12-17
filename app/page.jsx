'use client'

import ChartBestSeller from 'components/ChartBestSeller'
import ChartSalesCategory from 'components/ChartSalesCategory'
import ChartSalesMark from 'components/ChartSalesMark'
// import AnyChart from 'anychart-react'
import { useEffect, useState } from 'react'

const HomePage = () => {
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
              <ChartSalesCategory categories={categories} />
              <ChartSalesMark categories={categories} />
              <ChartBestSeller categories={categories} type='best' title='Vendedor con mayor numero de ventas con respecto a la categoria' />
              <ChartBestSeller categories={categories} type='worst' title='Vendedor con menor numero de ventas con respecto a la categoria' />
            </>
            )
          : (
            <p>Cargando</p>
            )
      }
    </section>
  )
}

export default HomePage
