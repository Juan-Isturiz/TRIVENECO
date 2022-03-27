import styles from "./Header.module.css";
import logo from "../../img/logoblack.svg";

const Header = (props) => {
    const logoInText = (
        <img className={styles.logoImg} src={logo} alt="Triveneco" />
    );

    return (
        <div className={`${styles.header} ${props.className}`}>
            <h1>{props.title}</h1>
            <div className={`${styles.transparent}`}></div>
            <img src={`${props.src}`} alt={`${props.alt}`} />
            <div>
                <p>
                    {props.text} {props.logo ? logoInText : null}
                </p>
            </div>
        </div>
    );
};

export default Header;
