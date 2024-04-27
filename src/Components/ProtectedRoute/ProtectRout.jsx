import React, { useState } from 'react'

export default function ProtectRout({children}) {
       const [isAuth]= useState(true)
  return (
    <>
       {isAuth? children : '/form'}
    </>
  )
}
