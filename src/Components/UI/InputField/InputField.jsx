import styles from './InputField.module.css'

const InputField = (props) => {
    return (
        <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.OnChange} className={styles.Field}/>
    )
}

export default InputField