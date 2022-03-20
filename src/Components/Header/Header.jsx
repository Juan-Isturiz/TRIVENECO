import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={`${styles.header} ${props.className}`}>
            <h1>{props.title}</h1>
            <div className={`${styles.transparent}`}></div>
            <img src={`${props.src}`} alt={`${props.alt}`} />
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Header;
