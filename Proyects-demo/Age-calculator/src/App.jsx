import styles from './App.module.css';
import { AgeCalculator } from './components/age-calculator/ageCalculator';

function App() {
  
  return (
    <div className={styles.App}>
      <AgeCalculator />
    </div>
  )
}

export default App
