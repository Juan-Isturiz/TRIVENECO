import styles from "./UserCard.module.css"
import { UserContext } from "../../Context/Context"
import { useContext, useState } from "react/cjs/react.development"
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
        <Card>
            {!isEditing ?
                <>
                    <div>Nombre: {user.displayName}</div>
                    <img src={user.photoURL}/>
                    <div>Numero de teléfono: {(user.phoneNumber)}</div>
                    <div>Reservas</div>
                    <Button type= 'button'onClick={toggleEdit}>
                        Edit
                    </Button>
                </>
                : <>
                    <UserEditForm onEdit={toggleEdit}/>
                </>}

        </Card>
    )
}
export default UserCard