import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './primerComponente'
import {PropsComponentes} from './props'
import './styles.css'
import {ListadoApp } from './listadoApp'
import { ListadoAppMap} from './listadoMap'

import {EventDom} from './events'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <EventDom value={0}/>
    <PrimerComponente/> */}

    <ListadoAppMap  className=" background"></ListadoAppMap>
    
  </React.StrictMode>,
)
