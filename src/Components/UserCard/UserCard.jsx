import styles from "./UserCard.module.css"
import { UserContext } from "../../Context/Context"
import { useContext, useState } from "react"
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import UserEditForm from "../UserEditForm/UserEditForm"
const UserCard = () => {
    const { user } = useContext(UserContext);
    const [isEditing, setEditing] = useState(false)
    
    const toggleEdit = () => {
        console.log(isEditing)
        if (isEditing) {
            setEditing(false)
        } else{
            setEditing(true)
        }
    }
    return (
        <div>
        
        <Card className={styles.container}>
        <h2 className={styles.title}>Edita tu perfil</h2>
            {!isEditing ?
                <>
                    <div><h3>Nombre</h3>{user.displayName}</div>
                    <img src={user.photoURL}/>
                    <div><h3>Numero de teléfono</h3> {(user.phoneNumber)}</div>
                    <div><h3>Reservas</h3></div>
                    <Button type= 'button'onClick={toggleEdit}>
                        Edit
                    </Button>
                </>
                : <>
                    <UserEditForm onEdit={toggleEdit}/>
                </>}

        </Card>
        </div>
    )
}
export default UserCard