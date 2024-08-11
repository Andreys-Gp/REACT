import { useEffect } from "react"
import React, { useState } from 'react'
import {fecthdata} from '../helper/fecthData'

export const useFecthData = (endPoint) => {

const [data, setdata] = useState([])
const [isLoading, setisLoading] = useState(true)

const getData = async()=>{
  const{data, isLoading} = await fecthdata(endPoint)
  setdata(data)
  setisLoading(isLoading)
}  

  useEffect(() => {
   getData()
  }, [endPoint])
  

    return {
      data,
      isLoading
    }
  }
  