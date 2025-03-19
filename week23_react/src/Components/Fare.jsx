import styles from '../Components/Fare.module.scss'
import PropTypes from 'prop-types';

export default function Fare({ name, price, speed, limitation, classData, isSelected, onClick }){

       return(
        <div className={isSelected ? `${styles[classData]} ${styles.bigger}` : `${styles[classData]}`}
         onClick={onClick}>
                <h3>{name}</h3>
                <div className={styles.pricefare}>
                    <p className={styles.currency}>руб </p>
                    <p className={styles.price_nmb}>{price}</p>
                    <p className={styles.duration}> /мес</p>
                </div>
                <p className={styles.speedfare}>{speed}</p>
                <p className={styles.limitations}>{limitation}</p>
            </div>
        )
}

Fare.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    speed: PropTypes.string.isRequired,
    limitation: PropTypes.string.isRequired,
    classData: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};