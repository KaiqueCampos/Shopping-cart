import Link from 'next/link'

import styles from './styles.module.scss'


export function Header() {
    return (
        <div className={styles.container}>
            <img src ='./jumpman.png' alt="Air Jordan"/>

            <Link href='/Products'>
                <p>Products</p>
            </Link>
        </div>
    )
}