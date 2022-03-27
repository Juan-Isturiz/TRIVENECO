import styles from "./Feedback.module.css";
import { MdFeedback } from "react-icons/md"

const FeedbackHeader = () => {
    return (
        <div className={styles.Header}>
            <MdFeedback size="10rem"></MdFeedback>
            <h1>Feedback</h1>
        </div>
    )
}

export default FeedbackHeader;