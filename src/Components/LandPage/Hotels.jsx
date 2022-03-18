import styles from "./BodyStyle.css";

const Hotel = (props) => {
    return (
        <section className={`${styles.hotel} ${props.className}`}>
            <h2>Hoteles</h2>
            <img src={`${props.src}`} alt={`${props.alt}`} />
            <p>{props.text}</p>
        </section>
    );
};

export default Hotel;
