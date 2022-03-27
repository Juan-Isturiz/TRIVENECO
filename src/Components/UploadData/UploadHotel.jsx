import React,{useState,useEffect} from 'react'
import {storage,db} from "../../utils/firebaseConfig"
import { v4 as uuidv4 } from 'uuid';
import styles from "./Upload.module.css"
import ReservationGen from "../Reservation/ReservationGen"
import {Link} from 'react-router-dom'



export default function UploadData() {


    const [ObjectSelected, setSelected]= useState("");
    const[archivoUrl, setArchivoUrl] = useState("");
    const[archivoUrl2, setArchivoUrl2] = useState("");
    const[archivoUrl3, setArchivoUrl3] = useState("");
    const[archivoUrl4, setArchivoUrl4] = useState("");
    const[docus,setDocus]=useState([]);
    const[listahab, setlistahab] = useState([]);
    const keyCode2= uuidv4();
    const keyCode= uuidv4();

    const archivoHandler = async (e)=>{

        const archivo= e.target.files[0]
        const storageRef = storage.ref()
        const archivoPath = storageRef.child(archivo.name)
        await archivoPath.put(archivo)
        console.log('archivo cargado:' ,archivo.name)
        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl)
    }

    const archivoHandler2 = async (e)=>{

        const archivo2= e.target.files[0]
        const storageRef2 = storage.ref()
        const archivoPath2 = storageRef2.child(archivo2.name)
        await archivoPath2.put(archivo2)
        console.log('archivo cargado:' ,archivo2.name)
        const enlaceUrl2 = await archivoPath2.getDownloadURL();
        setArchivoUrl2(enlaceUrl2)
    }

    const archivoHandler3 = async (e)=>{

        const archivo3= e.target.files[0]
        const storageRef3 = storage.ref()
        const archivoPath3 = storageRef3.child(archivo3.name)
        await archivoPath3.put(archivo3)
        console.log('archivo cargado:' ,archivo3.name)
        const enlaceUrl3 = await archivoPath3.getDownloadURL();
        setArchivoUrl3(enlaceUrl3)
    }

    const archivoHandler4 = async (e)=>{

        const archivo4= e.target.files[0]
        const storageRef4 = storage.ref()
        const archivoPath4 = storageRef4.child(archivo4.name)
        await archivoPath4.put(archivo4)
        console.log('archivo cargado:' ,archivo4.name)
        const enlaceUrl4 = await archivoPath4.getDownloadURL();
        setArchivoUrl4(enlaceUrl4)
    }

    const submitHandler = async (e)=>{
        e.preventDefault()
        const nombreHotel = e.target.nombre.value
        const nombreLugarInteres = e.target.lugar.value
        const nombreLugarInteres2 = e.target.lugar2.value
        const descripcionArchivo = e.target.descripcionArchivo.value
        const descripcionArchivo2 = e.target.descripcionArchivo2.value
        const descripcionArchivo3 = e.target.descripcionArchivo3.value
        const MascotaArchivo = e.target.mascota.value
        const ComidaRica = e.target.comida.value
        const PlayaChevere = e.target.playa.value
        const ApostarCool = e.target.casino.value
        const relajacionRela = e.target.entretenimiento.value
        const rankingArchivo = e.target.ranking.value
        const hayCiudad = e.target.ciudades.value
        const timax= e.target.timax.value
        const timin= e.target.timin.value
        const personasHab= e.target.personasHab.value
        const precioPerDay=e.target.precioPerDay.value
        const habitacion =e.target.habitacion.value

        if(!precioPerDay){
            alert("No hay precio")
            return}
            
            if(!habitacion){
                alert("No hay nombre de habitacion")
                return}

        if(!hayCiudad){
            alert("No hay ciudades no se puede procesar")
            return}

        if(!nombreHotel){
            alert("coloca el nombre del hotel")
            return}
        if(!nombreLugarInteres){
            alert("coloca el nombre del lugar de interes")
            return}
            if(!nombreLugarInteres2){
                alert("coloca el nombre del lugar de interes")
                return}
        if(!descripcionArchivo){
            alert("coloca una descripción")
            return}
        if(!descripcionArchivo2){
            alert("coloca una descripción")
            return}
            if(!descripcionArchivo3){
                alert("coloca una descripción")
                return}
                
        const coleccionRef =  db.collection("hoteles")
        const docu = await coleccionRef.doc(keyCode).set({keyCode:keyCode,nombre: nombreHotel, url: archivoUrl,url2: archivoUrl2, 
            url3: archivoUrl3, descripcion: descripcionArchivo, descripcion2: descripcionArchivo2, descripcion3:descripcionArchivo3,
            mascota:MascotaArchivo, Comida:ComidaRica, Playa:PlayaChevere, Casino:ApostarCool, entretenimiento:relajacionRela , ranking:rankingArchivo,
            lugar:nombreLugarInteres, lugar2:nombreLugarInteres2, ciudad:hayCiudad})

        listahab.push({timax:timax,keyCode2:keyCode2, timin:timin,personasHab:personasHab,precioPerDay:precioPerDay,habitacion:habitacion,archivoUrl4:archivoUrl4})
        
         await coleccionRef.doc(keyCode).update({lista2:listahab})

            console.log("archivo cargado:", nombreHotel, "url:",archivoUrl)
        alert("Se ha procesado su solicitud") 
    }

    const deleteSel = async (keyToDel1)=>{
        const coleccionRef2 =  db.collection("hoteles")
        const docu = await coleccionRef2.doc(keyToDel1).delete()
    }

    useEffect(async ()=>{
        const docusList = await db.collection("hoteles").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))

    },[])

    const[docusCity,setDocusCity]=useState([]);

    useEffect(async ()=>{
    const docusCity = await db.collection("ciudades").get()
    setDocusCity(docusCity.docs.map((doccity)=>doccity.data()))
},[])


    
    const handleChange = (e) => {
        setSelected(e.target.value)
      }

    return (
        <div className={styles.Container}>

        <form onSubmit={submitHandler} className={styles.Formulario}>
            <h1 className={styles.h1}>Subir Archivos</h1>
            <br/>
            <h3 className={styles.h3}>Foto del hotel:</h3>
            <input type="file" onChange={archivoHandler}/>
            <br/>
            <h3 className={styles.h9}>(preferencia: 1080x608 pixeles)</h3>
            <br/>
            <br/>
            <h3 className={styles.subtitulo}>Descripción General</h3>
            <h3 className={styles.h3}>Nombre del hotel:</h3>
            <input type="text" name="nombre" placeholder="inserte nombre del hotel" size="50" maxLength="40"/>
            <br/>
            <h3 className={styles.h3}>Seleccione el ranking del hotel:</h3>
            <select onChange={(e) => handleChange(e)} name="ranking">
                <option value="1 Estrella">1 Estrella</option>
                <option value="2 Estrellas">2 Estrellas</option>
                <option value="3 Estrellas">3 Estrellas</option>
                <option value="4 Estrellas">4 Estrellas</option>
                <option value="5 Estrellas">5 Estrellas</option>
   		    </select>

               <h3 className={styles.h3}>Seleccione la ciudad:</h3>
               <select onChange={(e) => handleChange(e)} name="ciudades">
               {docusCity.map((doc)=>
               
                   <option value={doc.nombre}>{doc.nombre}</option>
                   
              )}
               </select>
            
                      
   		   

               <br/>
            <br/>
            <h3 className={styles.h3}>Descripcion del hotel:</h3>
            <textarea name="descripcionArchivo" placeholder="describe el hotel" className={styles.textarea} rows={4}/>
            <br/>
            <h3 className={styles.h3}>Permite mascotas?:</h3>
            <select onChange={(e) => handleChange(e)} name="mascota">
                <option value="Si">Si</option>
                <option value="No">No</option>
   		    </select>
            <h3 className={styles.h3}>Viene con desayuno incluido?:</h3>
            <select onChange={(e) => handleChange(e)} name="comida">
                <option value="Si">Si</option>
                <option value="No">No</option>
   		    </select>
            <h3 className={styles.h3}>Con vista a la playa?:</h3>
            <select onChange={(e) => handleChange(e)} name="playa">
                <option value="Si">Si</option>
                <option value="No">No</option>
   		    </select>   
            <h3 className={styles.h3}>Tiene Piscina/Bar/Gimnasio?:</h3>
            <select onChange={(e) => handleChange(e)} name="entretenimiento">
                <option value="Si">Si</option>
                <option value="No">No</option>
   		    </select>
            <h3 className={styles.h3}>Tiene casino?:</h3>
            <select onChange={(e) => handleChange(e)} name="casino">
                <option value="Si">Si</option>
                <option value="No">No</option>
   		    </select>
               <br/>
               <br/>
            <h3 className={styles.subtitulo}>Lugares de interes</h3>
            <h3 className={styles.h3}>Nombre del primer lugar:</h3>
            <input type="text" name="lugar" placeholder="inserte nombre del lugar" size="50" maxLength="40"/>
            <br/>
            <h3 className={styles.h3}>Foto del lugar:</h3>
            <input type="file" onChange={archivoHandler2}/>
               <br/>
            <br/>
            <h3 className={styles.h3}>Describe el lugar:</h3>
            <textarea name="descripcionArchivo2" placeholder="describe el lugar detalladamente" className={styles.textarea} rows={4}/>
            <br/>
            
            <br/>
            <br/>
            <h3 className={styles.h3}>Nombre del segundo lugar:</h3>
               <input type="text" name="lugar2" placeholder="inserte nombre del lugar" size="50" maxLength="40"/>
               <br/>
            <h3 className={styles.h3}>Foto del lugar:</h3>
            <input type="file" onChange={archivoHandler3}/>
               <br/>
            <br/>
            <h3 className={styles.h3}>Describe el lugar:</h3>
            <textarea name="descripcionArchivo3" placeholder="describe el lugar detalladamente" className={styles.textarea} rows={4}/>
            <br/>
            <h3 className={styles.h3}>Es necesario colocar una habitacion al momento de crear</h3>
            <h3>Foto de la habitacion:</h3>
            <input type="file" onChange={archivoHandler4}/>
            <ReservationGen/>

            <br/>
            <button className={styles.enviar}>
            
                Enviar</button>
                
        </form>

        <br/>
            <h1 className={styles.h1}>Hoteles guardados en el sistema</h1>
        <ul className={styles.ciudades}>
        
            {docus.map((doc)=><li key={doc.keyCode}>
                <br/>
                <br/>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px"></img>
                <br/>
                <button onClick={()=>deleteSel(doc.keyCode)} className={styles.oscurecer}>Eliminar</button>
                <br/>
                <br/>
                <Link to={`/AddHab/${doc.keyCode}`} className={styles.h1}> Editar</Link>
                
                </li>)}
        </ul>
        
        </div>
    )
}
