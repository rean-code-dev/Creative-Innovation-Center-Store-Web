import React from 'react'
import "../../homeStyle/container.css";

function Button({btnName}) {
  return (
    <div>
          <button className='bg-gray-50 text-lg hover:bg-transparent hover:text-white hover:border-2 text-red-600 font-sans py-2 px-8 rounded'>{ btnName }</button>
    </div>
  )
}

export default Button;
