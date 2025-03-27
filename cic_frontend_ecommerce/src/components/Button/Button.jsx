import React from 'react'
import "../../homeStyle/container.css";

function Button({btnName}) {
  return (
    <div>
  <button className="bg-red-500 text-white text-lg font-sans py-2 px-8 rounded border-2 border-red-500 
                     hover:text-red-500 hover:border-red-500 
                     transition-all duration-300 transform hover:scale-105">
    {btnName}
  </button>
</div>

  )
}

export default Button;
