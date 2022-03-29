

const Comments = (props) => {
    const { text, photoURL } = props.message;
    

    return (<>
        <div>
            
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>)
}
export default Comments