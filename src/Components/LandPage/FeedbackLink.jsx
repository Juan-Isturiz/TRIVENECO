import styles from "./FeedbackLink.module.css";
import Button from "../UI/Button/Button";

//Bloque de la página que lleva a la página de Feedback
const Feedback = (props) => {
    return (
        <div className={`${styles.feedback} ${props.className}`}>
            <h3>{props.question}</h3>
            <Button type="button" className={styles.btn} disabled={false}>
                Preguntas y Comentarios
            </Button>
        </div>
    );
};

export default Feedback;
