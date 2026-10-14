import React from 'react'
import FilterUsers from '@/components/FilterUsers'
interface User {
    id: string
    title: string
}

const Classroom = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const users = await res.json()

  return (
    <div>
       <FilterUsers users={users} />
    </div>
  )
}

export default Classroom