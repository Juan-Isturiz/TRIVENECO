import React from 'react'
import Hero from "../Components/Hero"
import Imagen from "../images/defaultBcg.jpeg"
import Banner from "../Components/Banner"

export default function Home() {
return (<div><Hero imagencita={Imagen} hijo={<Banner title={"Habitaciones premium"} subtitle= {"precio $50 la noche"}></Banner>}>
    </Hero>
    </div>)

}
