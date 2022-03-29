import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { db, date, currentLog } from "../../utils/firebaseConfig";
import { useForm } from "react-hook-form";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import styles from "./CommentSection.module.css";

const CommentSection = (props) => {
    const { doc, collection } = props;
    const [messages, setMessages] = useState({
        photoURL: null,
        text: "",
        id: 123,
    });
    const [newMessage, setNewMessage] = useState();
    const { register, handleSubmit } = useForm({
        mode: "onChange",
        defaultValues: {
            msg: "",
        },
    });
    useEffect(() => {
        try {
            db.collection(collection)
                .doc(doc)
                .collection("messages")
                .orderBy("createdAt")
                .onSnapshot((msg) => {
                    setMessages(
                        msg.docs.map((doc) => {
                            return { id: doc.id, data: doc.data() };
                        })
                    );
                });
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    const onSubmit = async (data) => {
        console.log("se ejecuta");
        const { uid, photoURL } = currentLog();
        await db.collection(collection).doc(doc).collection("messages").add({
            text: data.msg,
            createdAt: date(),
            uid,
            photoURL,
        });
    };
    return (
        <div className={styles.commentDiv}>
            {messages.text != "" &&
                messages.map((doc) => {
                    return <Comments key={doc.id} message={doc.data} />;
                })}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("msg", { minLength: 10 })}></input>
            </form>
            <div className={styles.btnContainer}>
                <Button type="submit">Enviar</Button>
            </div>
        </div>
    );
};
export default CommentSection;
