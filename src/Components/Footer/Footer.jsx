import styles from "./Footer.module.css";
import logo from "../../img/logoblack.svg";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Triveneco" />
            <div className={styles.lines}></div>
            {/* No eliminen los divs vacíos, son las líneas */}
            <div className={styles.iconContainer}>
                <FaGithubSquare
                    className={styles.icons}
                    onClick={() => setOpen(!open)}
                />
                <IoMdMail
                    className={styles.icons}
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className={styles.lines}></div>
            <div className={styles.license}>
                <small>© 2022 Triveneco. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
