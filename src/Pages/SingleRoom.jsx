import React from 'react'
import Im from "../images/room-8.jpeg"
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"

export default function SingleRoom() {
    return (<Hero imagencita={Im} hijo={<Banner title={"Mejores Habitaciones"} subtitle= {"espaciosas y bonitas"}></Banner>}></Hero>)
}

