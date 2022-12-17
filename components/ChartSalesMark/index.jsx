'use client'

import { useEffect, useState } from 'react'
import { transformationMarkChart } from 'helpers/transformation_data'
import AnyChart from 'anychart-react'

const ChartSalesMark = ({ categories }) => {
  const [category, setCategory] = useState(null)
  const [dataChart, setDataChart] = useState(null)

  useEffect(() => {
    setCategory(categories[0].id)
  }, [])

  useEffect(() => {
    setDataChart(null)
    const getDataCategory = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/mark?country=MCO&category=${category}`)
        const json = await res.json()

        transformationMarkChart(json, setDataChart)
      } catch (error) {
        console.log(error)
      }
    }

    getDataCategory()
  }, [category])

  return (
    <div className='flex flex-col justify-center items-center px-5 py-3 w-full'>
      <label className='w-full mb-4'>
        <span className='text-white font-semibold'>
          Selecciona una categoria:
        </span>
        <select
          name='category'
          onChange={(e) => {
            setDataChart(null)
            setCategory(e.target.value)
          }}
          className='w-full px-2 py-3 text-base bg-transparent color-white outline-none border-b border-b-white'
        >
          {
            categories?.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </select>
      </label>
      {
       dataChart && (
         <div className='bg-white border shadow-2xl rounded-lg flex-grow'>
           <AnyChart
             id='mark_sells'
             width={500}
             height={260}
             type='column'
             data={dataChart}
             title='Marca con mayores ventas'
           />
         </div>
       )
      }
    </div>
  )
}

export default ChartSalesMark
