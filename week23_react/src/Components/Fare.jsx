import styles from '../Components/Fare.module.scss'


export default function Fare(props){
   const { name, price, speed, limitation, classData} = props;
    // const fare_card = styles.fare_card;
   const pricefare = styles.pricefare;
   const currency = styles.currency;
   const price_nmb = styles.price_nmb;
   const duration = styles.duration;
   const speedfare = styles.speedfare;
   const limitations = styles.limitations;
       return(
        <div className={styles[classData]}>
            {/* <div className={fare_card}> */}
                <h3>{name}</h3>
                <div className={pricefare}>
                    <p className={currency}>руб </p>
                    <p className={price_nmb}>{price}</p>
                    <p className={duration}> /мес</p>
                </div>
                <p className={speedfare}>{speed}</p>
                <p className={limitations}>{limitation}</p>
            {/* </div> */}
        </div>
    )
}