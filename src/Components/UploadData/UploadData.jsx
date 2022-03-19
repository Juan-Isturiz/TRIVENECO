import React,{useState,useEffect} from 'react'
import {storage,db} from "../../utils/firebaseConfig"


export default function UploadData() {

    const[archivoUrl, setArchivoUrl] = useState("");
    const[docus,setDocus]=useState([]);

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
        if(!nombreArchivo){
            alert("coloca un nombre")
            return}
        if(!nombreArchivo){
            alert("coloca una descripción")
            return}    
        const coleccionRef =  db.collection("archivos")
        const docu = await coleccionRef.doc(nombreArchivo).set({nombre: nombreArchivo, url: archivoUrl, descripcion: descripcionArchivo})
        console.log("archivo cargado:", nombreArchivo, "url:",archivoUrl)
    }

    useEffect(async ()=>{
        const docusList = await db.collection("archivos").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))

    },[])

    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="file" onChange={archivoHandler}/>
            <input type="text" name="nombre" placeholder="nombra tu archivo"/>
            <input type="text" name="descripcion" placeholder="describe la cosa"/>
            <button>enviar</button>
        </form>
        <ul>
            {docus.map((doc)=><li>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px"></img>
                <h3>{doc.descripcion}</h3>
                </li>)}
        </ul>
        </>
    )
}
