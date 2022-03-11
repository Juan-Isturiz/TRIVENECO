import React from 'react'
import Im from "../images/room-11.jpeg"
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"

export default function Rooms() {
return (<Hero imagencita={Im} hijo={<Banner title={"Reserve ahora mismo"} subtitle= {"$20 single room"}></Banner>}></Hero>)
}
