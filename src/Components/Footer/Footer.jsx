import styles from "./Footer.module.css";
import logo from "../../img/logoblack.svg";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    const routeChange = (link) => {
        let path = { link };
        history.push(path);
    };

    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Triveneco" />
            <div className={styles.lines}></div>
            {/* No eliminen los divs vacíos, son las líneas */}
            <div className={styles.iconContainer}>
                <a
                    href="https://github.com/Juan-Isturiz/TRIVENECO"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithubSquare className={styles.icons} />
                </a>
                <a href="mailto:triveneco@gmail.com">
                    <IoMdMail className={styles.icons} />
                </a>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.license}>
                <small>© 2022 Triveneco. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
