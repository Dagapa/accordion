import dataAccordion from './dataAccordion'

export const Accordion = () => {

    return (

        <div className='accordion'>

           {
            dataAccordion.map((elemento) => {
              <div className='elemento-container'>
                <div className='titulo'>
                <h3>{elemento.titulo}</h3>
                </div>
                <div className='parrafo'>
                  <p>{elemento.parrafo}</p>
                </div>
              </div>
            })
          } 

        </div>
    )
}