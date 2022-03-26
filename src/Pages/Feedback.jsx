import React from "react";
import styles from "./Feedback.module.css";

export default function Feedback() {
    return (
        <div className={styles.container}>
            <div
                className="fb-comments"
                data-href="https://developers.facebook.com/docs/plugins/comments#generadorTrivenecoLaMejorPaginaDeViajes234324324234"
                data-width="100%"
                data-numposts="100"
            ></div>
        </div>
    );
}
