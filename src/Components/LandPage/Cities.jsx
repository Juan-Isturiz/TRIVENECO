import styles from "./BodyStyle.module.css";
import Button from "../UI/Button/Button";

const Cities = (props) => {
    return (
        <section className={`${styles.body} ${props.className}`}>
            <div>
                <h2>Ciudades</h2>
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
                        Ver ciudades
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Cities;
