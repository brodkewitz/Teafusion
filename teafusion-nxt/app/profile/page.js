import Navbar from "../navbar.js";
import Footer from "../footer.js";
import "public/styles/navbar.css";
import styles from "public/styles/profile.module.css";

export default function profile(){
    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile</title>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.section}>
                    <img className={styles.pfp} src="assets/images/profile/pfp-x.png" />
                    <div className={styles.right}>
                        <div className={styles.row1}>
                            <h1>My Account</h1>
                            <p>Tea Connoisseur since 2018</p>
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.column1}>
                                <h2>ACCOUNT INFO</h2>
                                <h3>Name:</h3>
                                <p>NAME</p>
                                <h3>Email:</h3>
                                <p>EMAIL</p>
                                <h3>Country:</h3>
                                <p>COUNTRY</p>
                            </div>
                            <div className={styles.column2}>
                                <h2>ORDER HISTORY</h2>
                                <h2>ORDER COLUMN 1</h2>
                                <p>ORDER COLUMN 2+3</p>
                                <h2>ORDER COLUMN 1</h2>
                                <p>ORDER COLUMN 2+3</p>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}