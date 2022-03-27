import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import styles from "./CiudadParticular.module.css";
import Header from "../Header/Header";
import CommentSection from "../CommentSection/CommentSection";
function searchingTerm(id) {
    return function (x) {
        return x.keyCode.toLowerCase().includes(id) || !id;
    };
}

export function CiudadParticular() {
    const { id } = useParams();
    const [docus, setDocus] = useState([]);
    const type = 'ciudades';

    useEffect(async () => {
        const docusList = await db.collection("ciudades").get();
        setDocus(docusList.docs.map((doc) => doc.data()));
    }, []);

    return (
        <div className={styles.container}>
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

                    <h1 className={styles.titulo}>Zona: </h1>
                    <h3 className={styles.descripcion}>{doc.zona}</h3>
                    <h1 className={styles.titulo}>Ranking: </h1>
                    <h3 className={styles.descripcion}>{doc.ranking}</h3>
                    <h1 className={styles.titulo}>Lugares de interés: </h1>
                    <h1 className={styles.titulo}>Primer lugar </h1>
                    <h3 className={styles.titulo}>{doc.lugar}</h3>
                    <img src={doc.url2} height="500px" width="600px"></img>
                    <h1 className={styles.titulo}>Descripción</h1>

                    <h3 className={styles.descripcion}>{doc.descripcion2}</h3>

                    <h1 className={styles.titulo}>Segundo lugar: </h1>
                    <h3 className={styles.titulo}>{doc.lugar2}</h3>
                    <img src={doc.url3} height="500px" width="600px"></img>
                    <h1 className={styles.titulo}>Descripción</h1>

                    <h3 className={styles.descripcion}>{doc.descripcion3}</h3>
                    {console.log(doc.keyCode)}
                    <CommentSection doc={doc.keyCode} collection={type}/>
                </li>
            ))}
        </div>
    );
}

export default CiudadParticular;
