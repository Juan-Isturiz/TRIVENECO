import React,{useState,useEffect} from 'react'
import {storage,db} from "../../utils/firebaseConfig"
import { v4 as uuidv4 } from 'uuid';


export default function UploadData() {


    const [ObjectSelected, setSelected]= useState("");
    const[archivoUrl, setArchivoUrl] = useState("");
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

    const submitHandler = async (e)=>{
        e.preventDefault()
        const nombreArchivo = e.target.nombre.value
        const descripcionArchivo = e.target.descripcion.value
        const zonaArchivo = e.target.zona.value
        if(!nombreArchivo){
            alert("coloca un nombre")
            return}
        if(!descripcionArchivo){
            alert("coloca una descripción")
            return}    
        const coleccionRef =  db.collection("archivos")
        const docu = await coleccionRef.doc(keyCode).set({keyCode:keyCode,nombre: nombreArchivo, url: archivoUrl, descripcion: descripcionArchivo, zona:zonaArchivo})
        console.log("archivo cargado:", nombreArchivo, "url:",archivoUrl)
    }

    const deleteSel = async (keyToDel1)=>{
        const coleccionRef2 =  db.collection("archivos")
        const docu = await coleccionRef2.doc(keyToDel1).delete()
    }

    useEffect(async ()=>{
        const docusList = await db.collection("archivos").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))

    },[])

    
    const handleChange = (e) => {
        setSelected(e.target.value)
      }

    return (
        <>
        <form onSubmit={submitHandler}>
            <br/>
            <input type="file" onChange={archivoHandler}/>
            <br/>
            <br/>
            <input type="text" name="nombre" placeholder="nombra tu archivo"/>
            <br/>
            <input type="text" name="descripcion" placeholder="describe la cosa"/>
            <br/>
            <select onChange={(e) => handleChange(e)} name="zona">
                <option value="Playa">Playa</option>
                <option value="Montaña">Montaña</option>
                <option value="Ciudad">Ciudad</option>
                <option value="Campo">Campo</option>
   		    </select>
            <br/>
            <button>
                enviar</button>
           
        </form>
        <br/>
        <ul>
            {docus.map((doc)=><li key={doc.keyCode}>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px"></img>
                <br/>
                <h3>{doc.descripcion}</h3>
                
                <button onClick={()=>deleteSel(doc.keyCode)}>eliminar</button>
                <br/>
                <br/>
                </li>)}
        </ul>
        </>
    )
}
