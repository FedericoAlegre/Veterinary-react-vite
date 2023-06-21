import { useState, useEffect } from "react"

function Error({msg}) {
  return (
    <div className="bg-red-600 l m-2 rounded-md p-1" >
       <p className="text-center uppercase">{msg}</p>
    </div>
  )
}

export default Error
