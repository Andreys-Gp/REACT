import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './primerComponente'
import {PropsComponentes} from './props'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente/>
    <PropsComponentes titulo="esta seccion es de props"  /* subtitulo={10} *//>
  </React.StrictMode>,
)
