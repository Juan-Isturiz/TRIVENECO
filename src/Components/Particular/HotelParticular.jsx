import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import styles from "./Particular.module.css";
import Reservation from "../Reservation/ReservationGen";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import CommentSection from "../CommentSection/CommentSection";

function searchingTerm(id) {
    return function (x) {
        return x.keyCode.toLowerCase().includes(id) || !id;
    };
}

export function HotelParticular() {
    const { id } = useParams();
    const [docus, setDocus] = useState([]);
    const type = "hoteles";
    const [organizado, setorganizado] = useState([]);

    useEffect(async () => {
        const docusList = await db.collection("hoteles").get();
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
                    <div className={styles.container}>
                        <h1 className={styles.titulo}>Casino: </h1>
                        <h3 className={styles.descripcion}>{doc.Casino}</h3>
                        <h1 className={styles.titulo}>Desayuno: </h1>
                        <h3 className={styles.descripcion}>{doc.Comida}</h3>
                        <h1 className={styles.titulo}>Playa: </h1>
                        <h3 className={styles.descripcion}>{doc.Playa}</h3>
                        <h1 className={styles.titulo}>Ciudad: </h1>
                        <h3 className={styles.descripcion}>{doc.ciudad}</h3>
                        <h1 className={styles.titulo}>Entretenimiento: </h1>
                        <h3 className={styles.descripcion}>
                            {doc.entretenimiento}
                        </h3>
                        <h1 className={styles.titulo}>
                            Se permiten mascotas:{" "}
                        </h1>
                        <h3 className={styles.descripcion}>{doc.mascota}</h3>

                        <h1 className={styles.titulo}>Intalaciones: </h1>
                        <h3 className={styles.titulo}>{doc.lugar}</h3>
                        <img src={doc.url2} height="500px" width="600px"></img>
                        <h1 className={styles.titulo}>Descripción</h1>

                        <h3 className={styles.descripcion}>
                            {doc.descripcion2}
                        </h3>

                        <h3 className={styles.titulo}>{doc.lugar2}</h3>
                        <img src={doc.url3} height="500px" width="600px"></img>
                        <h1 className={styles.titulo}>Descripción</h1>

                        <h3 className={styles.descripcion}>
                            {doc.descripcion3}
                        </h3>

                        <h3 className={styles.h3}>Seleccione la habitación:</h3>
                        {doc.lista2.map((docu) => (
                            <div key={docu.keyCode2}>
                                <Link to={`/Reserva/${docu.keyCode2}`}>
                                    {docu.habitacion}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <CommentSection doc={doc.keyCode} collection={type} />
                </li>
            ))}

            <Reservation></Reservation>
        </div>
    );
}

export default HotelParticular;
