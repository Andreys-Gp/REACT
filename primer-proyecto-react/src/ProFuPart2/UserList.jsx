
import React from 'react'
import {useFecthData} from '../hooks/useFecthData'

export const UserList = ({endPoint}) => {

    const {data , isLoading} =useFecthData(endPoint)
        

  return (
    <>
    <ul>
        {
        isLoading ? <p>cargando...</p>
                  :endPoint == 'users'
                        ? data.map(item=><li key={item.id}> {item.name} </li>)
                        : data.map(item=><li key={item.id}> {item.body} </li>)
        }
    </ul>
    </>
  )
}
