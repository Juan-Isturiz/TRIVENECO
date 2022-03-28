import ShowHotel from "../Components/UploadData/ShowHotel"
import Header from "../Components/Header/Header"    


    const HotelViewPage =()=>{
        
        return(
            <div>
                <Header
                    className="header"
                    title="Hoteles"
                    src={"https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                    alt="imagen del titulo"
                    text="¡Consigue las mejores ofertas en hoteles!"
                    logo={false}
                ></Header>
                <ShowHotel/>
            </div>
        )
    }

export default HotelViewPage