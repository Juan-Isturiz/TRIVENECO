import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import styles from "./Particular.module.css";
import Reservation from "../Reservation/ReservationGen";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import CommentSection from "../CommentSection/CommentSection";
import Habitaciones from "../Habitaciones/Habitaciones";

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
                        <section className={styles.gridContainer}>
                            <div>
                                <h2>Casino</h2>
                                <h3>{doc.Casino}</h3>
                            </div>
                            <div>
                                <h2>Desayuno</h2>
                                <h3>{doc.Comida}</h3>
                            </div>
                            <div>
                                <h2>Playa</h2>
                                <h3>{doc.Playa}</h3>
                            </div>
                            <div>
                                <h2>Ciudad</h2>
                                <h3>{doc.ciudad}</h3>
                            </div>
                            <div>
                                <h2>Entretenimiento</h2>
                                <h3>{doc.entretenimiento}</h3>
                            </div>
                            <div>
                                <h2>Se permiten mascotas </h2>
                                <h3>{doc.mascota}</h3>
                            </div>
                        </section>

                        <h2 className={styles.interest}>Instalaciones</h2>

                        <section className={styles.gridContainer}>
                            <div>
                                <h3 className={styles.textException}>
                                    {doc.lugar}
                                </h3>
                                <img
                                    className={styles.imgs}
                                    src={doc.url2}
                                    alt={`Imagen ${doc.lugar}`}
                                ></img>
                            </div>
                            <div>
                                <h3 className={styles.textException}>
                                    {doc.lugar2}
                                </h3>
                                <img
                                    className={styles.imgs}
                                    src={doc.url3}
                                    alt={`Imagen ${doc.lugar2}`}
                                ></img>
                            </div>
                        </section>

                        <h2 className={styles.interest}>
                            Seleccione la habitación
                        </h2>

                        <Habitaciones doc={doc.keyCode} />
                    </div>
                    <CommentSection doc={doc.keyCode} collection={type} />
                </li>
            ))}
        </div>
    );
}

export default HotelParticular;
