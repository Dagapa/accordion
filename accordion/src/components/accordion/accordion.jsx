import dataAccordion from "../dataAccordion";
import { useState } from "react";
import "./accordion.css";

// -Todo - estudiar para que sirve display en css
// -Todo - estudiar los tipos de medidas en css. (absolutas y relativas)
// -Todo - dejar fijo el recuadro blanco
// -Todo - validar la logica de cuando tengo un elemento abierto y selecciono otro deberia cerrar el elemento abierto y abrir el nuevo elemento seleccionado.

export const Accordion = () => {
  const [isOpenBox, setIsOpenBox] = useState(false);
  const [currentOption, setIsCurrentOption] = useState("");

  const handleSelectItem = (elemento) => {
    if(currentOption === elemento){
      setIsOpenBox((prev) => !prev);
    } else {
      setIsOpenBox(true)
    }
    setIsCurrentOption(elemento)
  }

  return (
    <div className="accordion">
      <h1>FAQs</h1>
      <div className="accordion-items">
        {dataAccordion.map((elemento, index) => {
          return (
            <div key={index} className="elemento-container">
              <div className="titulo-contenedor">
                <h3>{elemento.titulo}</h3>
                <p className="open-items" onClick={() => handleSelectItem(elemento.titulo)}>
                  {isOpenBox && currentOption === elemento.titulo ? "-" : "+"}
                </p>
              </div>
              {(isOpenBox && currentOption === elemento.titulo) && (
                <div className="parrafo">
                  <p>{elemento.parrafo}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
