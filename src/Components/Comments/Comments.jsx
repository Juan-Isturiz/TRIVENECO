

const Comments = (props) => {
    const { text, photoURL } = props.message;
    console.log("rendering")

    return (<>
        <div>
            {console.log("render")}
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>)
}
export default Comments