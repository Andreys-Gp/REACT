

export const Userlist = ({endPoint}) => {

  const [daT, setdaT] = useState([]);
  const fetchdaT = async ()=>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json()
        setdaT(data)
    } catch (error) {
        console.error(error)
    }
}



  return (
    <>
    <ul>
        {/* {daT.map(daT => <li key={daT.id}>Nombre:{daT.name} Email:{daT.email}</li>)} */}
        {endPoint == 'users' ? {daT.map(users => <li key={users.id}>Nombre:{users.name} Email:{users.email}</li>)} 
                            :  {daT.map(users => <li key={users.id}>Nombre:{users.name} Email:{users.email}</li>)}  
      }
    </ul>
    
    </>
  )
}
