import styles from "./BodyStyle.module.css";

const Hotel = (props) => {
    return (
        <section className={`${styles.body} ${props.className}`}>
            <div>
                <h2>Hoteles</h2>
            </div>
            <div className={`${styles.container}`}>
                <img src={`${props.src}`} alt={`${props.alt}`} />
                <div>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
    );
};

export default Hotel;
