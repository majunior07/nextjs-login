import styles from './loginCard.module.css'

export default function LoginCard({ tittle, children}) {
    return(
        <div className={styles.card}>
            <h2 className={styles.tittle}>{tittle}</h2>
            {children}  
        </div>
    )
}