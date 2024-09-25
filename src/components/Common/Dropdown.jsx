import React from 'react'

function Dropdown({setFilterOption, filterOption, options}) {
  return (
    <select className='bg-inherit w-[8rem] sm:w-[10rem] cursor-pointer outline-none p-4' value={filterOption} onChange={(event) => setFilterOption(event.target.value)}>
        {
            options.map((item, index) => (
                <option value={item.value} key={index} className='bg-zinc-800 text-white cursor-pointer' disabled={item.isDisabled} >
                    {item.title}
                </option>
            ))
        }
    </select>
  )
}

export default Dropdown