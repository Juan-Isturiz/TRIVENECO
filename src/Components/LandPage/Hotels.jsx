import styles from "./BodyStyle.module.css";
import Button from "../UI/Button/Button";
import { Link} from 'react-router-dom'

const Hotel = (props) => {
    return (
        <section className={`${styles.body} ${props.className}`}>
            <div>
            <Link to="/HotelView" className={styles.semiTitle} >Hoteles</Link>
            </div>
            <div className={`${styles.container}`}>
                <img src={`${props.src}`} alt={`${props.alt}`} />
                <div>
                    <p>{props.text}</p>
                    <Button
                        type="button"
                        className={styles.btn}
                        disabled={false}
                    >
                        <Link to="/HotelView">
                        Ver hoteles</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hotel;
