import { useQuery } from '@apollo/client'
import React from 'react'

function Blogs() {
  const { loading,data,errors}=useQuery()
  return (
    <div>
      Blogs
    </div>
  )
}

export default Blogs
