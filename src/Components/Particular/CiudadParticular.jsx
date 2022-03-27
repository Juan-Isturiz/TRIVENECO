import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import styles from "./Particular.module.css";
import Header from "../Header/Header";

function searchingTerm(id) {
    return function (x) {
        return x.keyCode.toLowerCase().includes(id) || !id;
    };
}

export function CiudadParticular() {
    const { id } = useParams();
    const [docus, setDocus] = useState([]);

    useEffect(async () => {
        const docusList = await db.collection("ciudades").get();
        setDocus(docusList.docs.map((doc) => doc.data()));
    }, []);

    return (
        <div>
            {docus.filter(searchingTerm(id)).map((doc) => (
                <li key={doc.keyCode}>
                    <Header
                        className="header"
                        title={doc.nombre}
                        src={doc.url}
                        alt={`Imagen de ${doc.nombre}`}
                        text={doc.descripcion}
                        logo={false}
                    ></Header>
                    <div className={styles.container}>
                        <div className={styles.rank}>
                            <h1>Ranking </h1>
                            <h3 className={styles.stars}>{doc.ranking}</h3>
                        </div>
                        <h1>Lugares de interés </h1>

                        <section>
                            <h3>{doc.lugar}</h3>
                            <img
                                src={doc.url2}
                                className={styles.imgs}
                                alt="Imagen lugar 1"
                            ></img>
                            <p>{doc.descripcion2}</p>
                        </section>
                        <section>
                            <h3>{doc.lugar2}</h3>
                            <img
                                src={doc.url3}
                                className={styles.imgs}
                                alt="Imagen lugar 2"
                            ></img>
                            <p>{doc.descripcion3}</p>
                        </section>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default CiudadParticular;
