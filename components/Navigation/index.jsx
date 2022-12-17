'use client'

import Imageml from '/public/mercado_libre.png'
import Image from 'next/image'
import NavLink from '/components/NavLink'

const routes = [
  {
    path: '/',
    label: 'Analisis de ventas'
  },
  {
    path: '/interaction',
    label: 'Analisis de interacciones'
  }
]

const Navigation = () => {
  return (
    <nav className='flex flex-col justify-between w-[20vw] h-screen bg-[#312a30] border-t rounded-t-lg'>
      <div className='flex justify-center h-[130px] mt-6'>
        <Image
          src={Imageml}
          width={150}
          height={114}
          alt='Img mercado libre'
        />
      </div>
      <section>
        {
        routes.map(route => (
          <NavLink
            key={route.path}
            label={route.label}
            path={route.path} classStyles='text-[#ff7f51] cursor-pointer font-semibold bg-white px-6 py-5'
          />
        ))
        }
      </section>
      <section>
        ''
      </section>
    </nav>
  )
}

export default Navigation
