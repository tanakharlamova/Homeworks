
import styles from './App.module.scss'
import Fare from './Components/Fare'

const fares = [
  {
      "name": "Безлимитный 300",
      "price": "300",
      "speed": "до 10 Мбит/сек",
      "limitation": "Объем включенного трафика неограничен",
      "classData": "blue"
  },
  {
      "name": "Безлимитный 450",
      "price": "450",
      "speed": "до 50 Мбит/сек",
      "limitation": "Объем включенного трафика неограничен",
      "classData": "green"
  },
  {
      "name": "Безлимитный 550",
      "price": "550",
      "speed": "до 100 Мбит/сек",
      "limitation": "Объем включенного трафика неограничен",
      "classData": "red"
  },
  {
      "name": "Безлимитный 1000",
      "price": "1000",
      "speed": "до 200 Мбит/сек",
      "limitation": "Объем включенного трафика неограничен",
      "classData": "gray"
  }
]



function App() {


  const container = styles.container;
  return (
    <div className={container}>
      {
                fares.map((fare, index) => (
                  <Fare 
                  {...fare} 
                  key={index}
                  
                  />
                ))
            }
    </div>
  )
}

export default App;
