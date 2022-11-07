import Header from "./Header";
import styles from "../styles/Layout.module.scss"

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                {children}
            </div>

        </div>
    )
}
