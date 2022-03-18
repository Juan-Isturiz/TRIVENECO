import styles from "./BodyStyle.css";

const Cities = (props) => {
    return (
        <section className={`${styles.cities} ${props.className}`}>
            <h2>Ciudades</h2>
            <img src={`${props.src}`} alt={`${props.alt}`} />
            <p>{props.text}</p>
        </section>
    );
};

export default Cities;
