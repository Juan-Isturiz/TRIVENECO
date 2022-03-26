import Cities from "../Components/LandPage/Cities.jsx";
import Hotels from "../Components/LandPage/Hotels.jsx";
import Feedback from "../Components/LandPage/Feedback";
import Header from "../Components/Header/Header";
import hotelImg from "../img/hotelpageimg.jpg";
import cityImg from "../img/ciudades.jpeg";
import secondcityImg from "../img/citypageimg.jpg";
import { UserContext } from '../Context/Context';
import { useContext,useEffect, useState } from "react";

const LandPage = () => {
    const {user, setUser, isLogged} = useContext(UserContext)
    const [webos, setWebos] =useState()
    useEffect(()=>{},[user])
    return (
        <div>
            <Header
                className="header"
                title="Bienvenido"
                src={cityImg}
                alt="imagen del titulo"
                text="¡No esperes más! Agenda el viaje de tus sueños con Triveneco"
            ></Header>
            <Cities
                className="body"
                src={secondcityImg}
                alt="imagen de ciudades"
                text="¿París? ¿New York? ¿London? y qué tal ¿Ciudad de México? ¿Conoces alguna ciudad? ¡Bueno no esperes más! Pasea por nuestra página para ver las diferentes ciudades que podrías visitar con nosotros"
            ></Cities>
            <Hotels
                className="body"
                src={hotelImg}
                alt="imagen de hoteles"
                text="No solo te quedes con viajar a la ciudad ¡quédate en tu hotel de ensueño! contamos con un excelente listado de hoteles que sin duda superarán tus expectativas"
            ></Hotels>
            <Feedback
                className="fb"
                question="¿Tienes alguna pregunta?"
            ></Feedback>
            {user.displayName}
        </div>
    );
};

export default LandPage;
