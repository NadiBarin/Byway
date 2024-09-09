import styles from './Card.module.css'
import circleImg  from './../../img/circle.png'

const Card = (props) => {
    console.log(props);
    return ( 
        <div className={styles.card}>
            <img className={styles.card__img} src={circleImg} alt="circle" />

            <div className={styles.card__body}>

                <p className={styles.card__text}>
                    {props.title}

                </p>
                <p className={styles.card__desc}>
                {props.p}
                </p>

            </div>

        </div>
        
        

    );
}

export default Card;