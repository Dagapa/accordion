import { useState } from 'react';
import styles from './ageCalculator.module.css';
import data from './data.json'

export const AgeCalculator = () => {

    const [values, setValues] = useState([]);

  const handleInputChange = (id) => (event) => {
    setValues({
      ...values,
      [id]: event.target.value,
    });
  };

  const handleButtonClick = () => {
    console.log(values);
  };

    return (
        <div className={styles.container}>
            <div className={styles.container_div_inputs}>
                {
                    data.map((elemento, item) => {
                        return (
                            <div key={item.id} className={styles.input}>
                                <label htmlFor={elemento.titulo} >{elemento.label}</label>
                                <input type='text' onChange={handleInputChange(elemento.id)}></input>
                            </div>
                        )
                    })
                }
                <button className={styles.button} onClick={handleButtonClick}>↓</button>
            </div>
            <div className={styles.container_items}>
                {
                    data.map((elemento, index) => {
                        return (
                            <h1 key={index}><span>38</span>{elemento.titulo}</h1>
                        )
                    })
                }
                
            </div>
        </div>
    )
}