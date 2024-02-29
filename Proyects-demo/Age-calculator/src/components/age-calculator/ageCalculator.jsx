import { useState } from 'react';
import styles from './ageCalculator.module.css';
import data from './data.json'

export const AgeCalculator = () => {

    const [birthDate, setBirthDate] = useState({});
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const handleInputChange = (label) => (event) => {
        setBirthDate({
            ...birthDate,
            [label]: event.target.value,
        });
    };

    /*   let arrayDate = Object.values(isAgeValues);
    let yearBirth = arrayDate[2];
    let monthBirth = arrayDate[1];
    let dayBirth = arrayDate[0];

    const handleAgeCalc = () => {

        if (arrayDate.length === 3) {

            let todayDate = new Date();
            let todayDay = todayDate.getDate();
            let todayMonth = todayDate.getMonth() + 1;
            let todayYear = todayDate.getFullYear();

            let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (dayBirth > todayDay) {
                todayDay = todayDay + daysOfMonth[todayMonth - 1];
                todayMonth = todayMonth - 1;
            }

            if (monthBirth > todayMonth) {
                todayMonth = todayMonth + 12;
                todayYear = todayYear - 1
            }
            
            let resultDays = todayDay - dayBirth;
            let resultMonths = todayMonth - monthBirth;
            let resultYears = todayYear - yearBirth;

        } else {
            console.log("ingrese todos los datos")
        }

    }; */

    const handleAgeCalc = () => {

        let today = new Date();
        let years = today.getFullYear() - birthDate.year;
        let months = today.getMonth() - birthDate.month;
        let days = today.getDate() - birthDate.day;

        setAge(years, months, days)

        console.log(years, months, days)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_div_inputs}>
                {
                    data.map((elemento, item) => {
                        return (
                            <div key={item} className={styles.input}>
                                <label htmlFor={elemento.titulo} >{elemento.label}</label>
                                <input type='number' onChange={handleInputChange(elemento.label)}></input>
                            </div>
                        )
                    })
                }
                <button className={styles.button} onClick={handleAgeCalc}>↓</button>
            </div>
            <div className={styles.container_items}>

            {age.days}<h1><p></p>days</h1>
            {age.months}<h1><span></span>months</h1>
            {age.years}<h1><span></span>years</h1>
                
            </div>
        </div>
    )
}