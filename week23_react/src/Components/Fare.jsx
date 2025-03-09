import styles from '../Components/Fare.module.scss'
import { useState } from 'react';

export default function Fare(props){
   const { name, price, speed, limitation, classData} = props;
    const [clicked, setClicked] = useState(false);

    function setBiggerClass(){
        setClicked(!clicked);
    }
   

   const pricefare = styles.pricefare;
   const currency = styles.currency;
   const price_nmb = styles.price_nmb;
   const duration = styles.duration;
   const speedfare = styles.speedfare;
   const limitations = styles.limitations;
   const bigger = styles.bigger;
       return(
        <div className={clicked ? `${styles[classData]} ${bigger}` : `${styles[classData]}`} onClick={setBiggerClass}>
                <h3>{name}</h3>
                <div className={pricefare}>
                    <p className={currency}>руб </p>
                    <p className={price_nmb}>{price}</p>
                    <p className={duration}> /мес</p>
                </div>
                <p className={speedfare}>{speed}</p>
                <p className={limitations}>{limitation}</p>
        </div>
    )
}