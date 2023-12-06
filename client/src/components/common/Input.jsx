import React from 'react'

function Input({type, name, placeholder, ...rest}) {
  return (
    <input className="w-full bg-dark py-2.5 px-4 rounded-md" type={type || "text"} name={name} placeholder={placeholder} {...rest} />
  )
}

export default Input
