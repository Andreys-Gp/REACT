
import React, { useState } from 'react'
import { UserList } from './UserList'

export const UsersApp = () => {

    const [endPoint, setendPoint] = useState('users')
    const handleFecth=()=>{
        setendPoint('comments')
    }

  return (
    <>
     <h1>Lista de Usuarios</h1>
     <UserList endPoint={endPoint}></UserList>
     <button onClick={handleFecth}>A qui se llama la api</button>
    </>
  )
}
