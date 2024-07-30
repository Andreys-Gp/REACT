import "../css/component.css";

const string = "esto es un texto",
  number = 12345,
  array = ["curso de react", "brayan practicas", 2, 1206],
  boolean = true,
  funcion = () => 1 + 1,
  objeto = { nombre: "brayan", años: 25 },
  fecha = new Date();

export const Variables = () => {
  return (
    <>
      <h1>ocject {JSON.stringify(objeto)} </h1>
      <p>funcion {funcion()}</p>
      <p>otro objecto {JSON.stringify(fecha)} </p>
      <h4>con stylos {string}</h4>
    </>
  );
};
