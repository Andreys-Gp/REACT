
import PropTypes from 'prop-types'


export const PropsComponentes=( {titulo , subtitulo} )=>{
  console.log(titulo )
  console.log(subtitulo)
    return (
        <>
<h2>{titulo}</h2>
<h2>{subtitulo+15}</h2>
        </>
    )
}

PropsComponentes.PropTypes={
    titulo: PropTypes.string.isRequired,
    subtitulo:PropTypes.number.isRequired
}

PropsComponentes.defaultProps={
    titulo:'curso de react',
    subtitulo:'seccion de props'
}
