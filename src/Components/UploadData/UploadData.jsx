import React,{useState,useEffect} from 'react'
import {storage,db} from "../../utils/firebaseConfig"
import { v4 as uuidv4 } from 'uuid';
import styles from "./Upload.module.css"
import { Link} from 'react-router-dom'

export default function UploadData() {


    const [ObjectSelected, setSelected]= useState("");
    const[archivoUrl, setArchivoUrl] = useState("");
    const[archivoUrl2, setArchivoUrl2] = useState("");
    const[archivoUrl3, setArchivoUrl3] = useState("");
    const[docus,setDocus]=useState([]);

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


    const submitHandler = async (e)=>{
        e.preventDefault()
        const nombreCiudad = e.target.nombre.value
        const nombreLugarInteres = e.target.lugar.value
        const nombreLugarInteres2 = e.target.lugar2.value
        const descripcionArchivo = e.target.descripcionArchivo.value
        const descripcionArchivo2 = e.target.descripcionArchivo2.value
        const descripcionArchivo3 = e.target.descripcionArchivo3.value
        const zonaArchivo = e.target.zona.value
        const rankingArchivo = e.target.ranking.value
        if(!nombreCiudad){
            nombreArchivo
            alert("coloca el nombre de la ciudad")
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
        const coleccionRef =  db.collection("ciudades")
        const docu = await coleccionRef.doc(keyCode).set({keyCode:keyCode,nombre: nombreCiudad, url: archivoUrl,url2: archivoUrl2, url3: archivoUrl3, descripcion: descripcionArchivo, descripcion2: descripcionArchivo2,descripcion3: descripcionArchivo3, zona:zonaArchivo, ranking:rankingArchivo,lugar:nombreLugarInteres, lugar2:nombreLugarInteres2})
        console.log("archivo cargado:", nombreCiudad, "url:",archivoUrl)
        alert("Se ha procesado su solicitud")
    }

    const deleteSel = async (keyToDel1)=>{
        const coleccionRef2 =  db.collection("ciudades")
        const docu = await coleccionRef2.doc(keyToDel1).delete()
    }

    useEffect(async ()=>{
        const docusList = await db.collection("ciudades").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))

    },[])

    
    const handleChange = (e) => {
        setSelected(e.target.value)
      }

    return (
        <div className={styles.Container}>
        <form onSubmit={submitHandler} className={styles.Formulario}>
            <h1 className={styles.h1}>Subir Archivos</h1>
            <br/>
            <h3 className={styles.h3}>Foto de la ciudad:</h3>
            <input type="file" onChange={archivoHandler}/>
            <br/>
            <h3 className={styles.h9}>(preferencia: 1080x608 pixeles)</h3>
            <br/>
            <br/>
            <h3 className={styles.subtitulo}>Descripción General</h3>
            <h3 className={styles.h3}>Nombre de la ciudad:</h3>
            <input type="text" name="nombre" placeholder="inserte nombre de la ciudad" size="80" maxLength="40"/>
            <br/>
            <h3 className={styles.h3}>Seleccione el ranking de la ciudad:</h3>
            <select onChange={(e) => handleChange(e)} name="ranking">
                <option value="1 Estrella">1 Estrella</option>
                <option value="2 Estrellas">2 Estrellas</option>
                <option value="3 Estrellas">3 Estrellas</option>
                <option value="4 Estrellas">4 Estrellas</option>
                <option value="5 Estrellas">5 Estrellas</option>
   		    </select>
               <br/>
            <br/>
            <h3 className={styles.h3}>Descripcion de la ciudad:</h3>
            <textarea name="descripcionArchivo" placeholder="describe la ciudad" className={styles.textarea} rows={4}/>
            <br/>
            <h3 className={styles.h3}>Seleccione la Zona:</h3>
            <select onChange={(e) => handleChange(e)} name="zona">
                <option value="Playa">Zona Playa</option>
                <option value="Montaña">Zona Montaña</option>
                <option value="Ciudad">Zona Ciudad</option>
                <option value="Campo">Zona Campo</option>
   		    </select>
               <br/>
               <br/>
               <h3 className={styles.subtitulo}>Lugares de interes</h3>
               <h3 className={styles.h3}>Nombre del primer lugar:</h3>
               <input type="text" name="lugar" placeholder="inserte nombre del lugar" size="80" maxLength="40"/>
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
            <h3 className={styles.h3}>Nombre del primer lugar:</h3>
               <input type="text" name="lugar2" placeholder="inserte nombre del lugar" size="80" maxLength="40"/>
               <br/>
            <h3 className={styles.h3}>Foto del lugar:</h3>
            <input type="file" onChange={archivoHandler3}/>
               <br/>
            <br/>
            <h3 className={styles.h3}>Describe el lugar:</h3>
            <textarea name="descripcionArchivo3" placeholder="describe el lugar detalladamente" className={styles.textarea} rows={4}/>
            <br/>

            <button className={styles.enviar}>

                Enviar</button>
            
        </form>
        <br/>
            <h1 className={styles.h1}>Ciudades guardados en el sistema</h1>
        <ul className={styles.ciudades}>
        
            {docus.map((doc)=><li key={doc.keyCode}>
                <br/>
                <br/>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="500px" width="500px"></img>
                <br/>
                <button onClick={()=>deleteSel(doc.keyCode)} className={styles.oscurecer}>Eliminar</button>
                <br/>
                <br/>
                <Link to={"/UpdateCity"} className = {styles.h1}> Editar </Link>
                </li>)}
        </ul>
        </div>
    )
}
