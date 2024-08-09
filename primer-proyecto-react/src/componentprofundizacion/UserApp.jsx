import { useEffect, useState } from "react";
import { Userlist } from "./Userlist";

export const UserApp = () => {
    
  const [endPoint, setendPoint] = useState('users');


    const handleFecth =()=>{
      setendPoint('comments')
    }

    /* useEffect(()=>{
        fetchUsers()
    },[]) */



  return (
    <>
      <h1>Listado de Usuarios</h1>

      <Userlist endpoint={endPoint}></Userlist>

      <button onClick={handleFecth}><h2>llamado api</h2></button>
    </>
  );
};
