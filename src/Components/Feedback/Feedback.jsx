import React from "react";
import styles from "./Feedback.module.css";

const Feedback = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.CityContainer}>
                <h2>How was the city of CITYNAME?</h2>
                <form action="">
                    <label htmlFor="cityFeedback"></label>
                    {/* <input type="text"  className={styles.inputText}/> */}
                    <textarea
                        name="cityFeedText"
                        id=""
                        cols="30"
                        rows="5"
                    ></textarea>
                    <br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className={styles.HotelContainer}>
                <h2>How was the hotel HOTELNAME?</h2>
                <form action="">
                    <label htmlFor="hotelFeedback"></label>
                    {/* <input type="text" className={styles.inputText}/> */}
                    <textarea
                        name="cityFeedText"
                        id=""
                        cols="30"
                        rows="5"
                    ></textarea>
                    <br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Feedback;
