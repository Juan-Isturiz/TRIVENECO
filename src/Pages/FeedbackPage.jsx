import FeedbackHeader from "../Components/Feedback/FeedbackHeader"
import Feedback from "../Components/Feedback/Feedback"
import CommentSection from "../Components/CommentSection/CommentSection"
const FeedbackPage = () => {
    return (
        <div>
            <FeedbackHeader></FeedbackHeader>
            <Feedback></Feedback>
            <CommentSection/>
        </div>
    )
}

export default FeedbackPage