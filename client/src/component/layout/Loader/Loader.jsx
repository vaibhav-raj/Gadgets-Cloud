import React from 'react'
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.loader}>
                </div>
            </div>
            <div className={styles.loadingtext}>
                Loading...
            </div>
        </div>
    )
}

export default Loader
