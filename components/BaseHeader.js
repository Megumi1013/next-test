import Link from 'next/link'
import styles from '../styles/BaseHeader.module.css'

export default function BaseHeader() {
    return(
        <header className={styles['header']}>
            <div className={styles.inner}>
                <div>
                    To do List
                </div>
            </div>
        </header>
    )
}