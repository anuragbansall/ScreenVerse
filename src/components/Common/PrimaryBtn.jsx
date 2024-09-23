import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryBtn({title, navigateTo}) {
  return (
    <Link to={navigateTo} className='bg-[#6556CD] px-4 py-2 text-xl font-semibold rounded-md mt-4'>{title}</Link>
  )
}

export default PrimaryBtn