/* const Button = () => {
  return (
    <>
      <h2> Contador 2: </h2>
      <button onClick={(event) => HandleClick(event, " boton 2 ")}>
        soy otro boton
      </button>
    </>
  );
}; */

import { useState } from "react";

export const Events = ({value}) => {

  const [ contador, setContador ] = useState (value)

  const HandleClickM = () => {
    setContador(contador + 1)
  };

  return (
    <>
      <h2>Eventos Contador </h2>
      <p>valor clicks : {contador} </p>
      <button onClick={HandleClickM}>soy un boton</button>

      {/* <Button> </Button> */}
    </>
  );
};
