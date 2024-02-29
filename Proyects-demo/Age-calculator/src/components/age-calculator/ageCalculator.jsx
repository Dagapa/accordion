import { useState } from 'react';
import styles from './ageCalculator.module.css';
import data from './data.json'

export const AgeCalculator = () => {

    const [birthDate, setBirthDate] = useState({});
    const [age, setAge] = useState({years: 0,months: 0, days: 0 });

    const handleInputChange = (label) => (event) => {
        setBirthDate({
            ...birthDate,
            [label]: event.target.value,
        });
    };

    const allValuesAreValid = Object.values(birthDate);

    const handleAgeCalc = () => {

        if(allValuesAreValid.length === 3){

            let today = new Date();
            let todayDay = today.getDate();
            let todayMonth = today.getMonth() + 1;
            let todayYear = today.getFullYear();

            let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (birthDate.day > todayDay) {
                todayDay = todayDay + daysOfMonth[todayMonth + 1];
                todayMonth = todayMonth - 1;
            }

            if (birthDate.month > todayMonth) {
                todayMonth = todayMonth + 12;
                todayYear = todayYear - 1;
            }

            let years = parseInt(todayYear - birthDate.year);
            let months = parseInt(todayMonth - birthDate.month);
            let days = parseInt(todayDay - birthDate.day);
   
            setAge({...age, years: years, months: months, days: days})

    } else {
        console.error("Falta uno de los campos")
    }
    }

        return (
            <div className={styles.container}>
                <div className={styles.container_div_inputs}>
                    {
                        data.map((elemento, item) => {
                            return (
                                <div key={item} className={styles.input}>
                                    <label htmlFor={elemento.titulo} >{elemento.label}</label>
                                    <input type='number' min="0" onChange={handleInputChange(elemento.label)}></input>
                                </div>
                            )
                        })
                    }
                    <button className={styles.button} onClick={handleAgeCalc}>↓</button>
                </div>
                <div className={styles.container_items}>

                    <h1><span>{(age.days != 0) ? `${age.days}` : "--"}</span>days</h1>
                    <h1><span>{(age.months != 0) ? `${age.months}` : "--"}</span>months</h1>
                    <h1><span>{(age.years != 0) ? `${age.years}` : "--"}</span>years</h1>

                </div>
            </div>
        )
}