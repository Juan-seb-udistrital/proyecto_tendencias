'use client'

import { useState, useEffect } from 'react'
import AnyChart from 'anychart-react'

const ChartBestScore = ({ categories, type, title }) => {
  const [dataChart, setDataChart] = useState(null)

  useEffect(() => {
    const arrayPromises = categories.map(category => fetch(`http://localhost:8000/api/v1/seller/${type}-seller?country=MCO&category=${category.id}`))

    const getDataChart = async () => {
      try {
        Promise.allSettled(arrayPromises).then(results => {
          const dataSellerPromises = results.map(result => result.value.json())

          Promise.allSettled(dataSellerPromises).then(resultsSeller => {
            const dataSeller = []
            console.log(resultsSeller)
            resultsSeller.forEach((result, index) => {
              dataSeller.push({
                x: `${categories[index].name} - ${result.value.nickname}`,
                value: result.value.media
              })
            })
            setDataChart(dataSeller)
          })
        })
      } catch (error) {
        console.log(error)
      }
    }

    getDataChart()
  }, [])

  return (
    <div className='container_pie flex justify-center items-center px-5 py-3'>
      {
        dataChart
          ? (
            <div className='bg-white border shadow-2xl rounded-lg flex-grow'>
              <AnyChart
                id={`pie-${type}`}
                width={500}
                height={630}
                type='pie'
                data={dataChart}
                title={title}
                class='pie_b'
              />
            </div>
            )
          : (
            <p>Cargando</p>
            )
      }
      <style jsx>
        {`
          #pie-best {
            height: 100% !important;
            flex-grow: 1 !important;
          }
        `}
      </style>
    </div>
  )
}

export default ChartBestScore
