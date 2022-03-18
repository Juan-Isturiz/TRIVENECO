import "./LandPage.module.css";
import Cities from "../../Components/LandPage/Cities.jsx";
import Hotels from "../../Components/LandPage/Hotels.jsx";
import Feedback from "../../Components/LandPage/Feedback";
import hotelImg from "../../img/hotelpageimg.jpg";
import cityImg from "../../img/citypageimg.jpg";

const LandPage = () => {
    return (
        //<Header />
        <div>
            <Cities
                className="body"
                src={cityImg}
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
        </div>
    );
};

export default LandPage;
