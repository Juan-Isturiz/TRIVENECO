import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebaseConfig";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { Link } from "react-router-dom";
import styles from "./View.module.css";
import InputField from "../UI/InputField/InputField";
import { FaFilter } from "react-icons/fa";
import { AiOutlineClear, AiFillStar, AiOutlineStar } from "react-icons/ai";

const searchingTerm = (term) => {
    return function (x) {
        return x.nombre.toLowerCase().includes(term) || !term;
    };
};

function zoneFilter(term) {
    return function (x) {
        return x.zona.toLowerCase().includes(term) || !term;
    };
}

const ShowData = () => {
    const [docus, setDocus] = useState([]);
    const [term, setTerm] = useState("");
    const [radio, setRadio] = useState("");

    useEffect(async () => {
        const docusList = await db.collection("ciudades").get();
        setDocus(docusList.docs.map((doc) => doc.data()));
    });

    return (
        <section>

            <Card className={styles.CardContainer}>
                <h2>Busca una ciudad</h2>
                <form className={styles.FormContainer}>
                    <InputField
                        type="buscador"
                        id="buscador"
                        placeholder="Filtrado por nombre"
                        onChange={(e) => setTerm(e.target.value)}
                    />

                    
                    <div>
                        <li className={styles.RadioContainer}>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="radio"
                                    value="Playa"
                                    onClick={(e) => setRadio("playa")}
                                />
                                Playa
                            </label>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="radio"
                                    value="montaña"
                                    onClick={(e) => setRadio("montaña")}
                                />
                                Montaña
                            </label>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="radio"
                                    value="Ciudad"
                                    onClick={(e) => setRadio("ciudad")}
                                />
                                Ciudad
                            </label>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="radio"
                                    value="Campo"
                                    onClick={(e) => setRadio("campo")}
                                />
                                Campo
                            </label>
                            <label htmlFor="">
                                <AiOutlineClear
                                    onClick={(e) => setRadio("")}
                                    size="1.7rem"
                                />
                            </label>
                        </li>
                    </div>
                </form>
            </Card>
            {radio != "" ? (
                <ul className={styles.list}>
                    {docus
                        .filter(zoneFilter(radio))
                        .filter(searchingTerm(term))
                        .map((doc) => (
                            <li key={doc.keyCode} className={styles.elements}>
                            <div className={styles.ImgContainer}>
                                <Link to={`/CiudadParticular/${doc.keyCode}`}>
                                    <img
                                        src={doc.url}
                                        className={styles.ElementImg}
                                    ></img>
                                </Link>
                                <div className={styles.OverImg}>
                                    <Link to={`/CiudadParticular/${doc.keyCode}`}>
                                    <h3 className={styles.Name}>{doc.nombre}</h3>
                                </Link>
                                </div>
                            </div>
                            {/* {doc.ranking == "1 Estrella" ? <AiOutlineStar /> : <AiFillStar />} */}
                            {/* {console.log(AmountStars)} */}
                            <h3 className={styles.Rating}>{doc.ranking}</h3>
                        </li>
                        ))}
                </ul>
            ) : (
                <ul className={styles.list}>
                    {docus.filter(searchingTerm(term)).map((doc) => (
                        <li key={doc.keyCode} className={styles.elements}>
                        <div className={styles.ImgContainer}>
                            <Link to={`/CiudadParticular/${doc.keyCode}`}>
                                <img
                                    src={doc.url}
                                    className={styles.ElementImg}
                                ></img>
                            </Link>
                            <div className={styles.OverImg}>
                                <Link to={`/CiudadParticular/${doc.keyCode}`}>
                                    <h3 className={styles.Name}>{doc.nombre}</h3>
                            </Link>
                            </div>
                        </div>
                        {/* {doc.ranking == "1 Estrella" ? <AiOutlineStar /> : <AiFillStar />} */}
                        {/* {console.log(AmountStars)} */}
                        <h3 className={styles.Rating}>{doc.ranking}</h3>
                    </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default ShowData;
