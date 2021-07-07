import Link from 'next/link'

import styles from './styles.module.scss'


export function Header() {
    return (
        <div className={styles.container}>
            <img src='./jumpman.png' alt="Air Jordan" />

            <Link href='/Home'>
                <p>Products</p>
            </Link>

            <Link href='/Home'>
                <svg className={styles.shoppingCart} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 225.388 225.388">
                    <path d="M225.388,184.014c0,16.71-13.595,30.305-30.305,30.305c-12.082,0-22.531-7.108-27.395-17.361H93.257 c-4.864,10.253-15.313,17.361-27.395,17.361c-16.71,0-30.305-13.595-30.305-30.305c0-13.886,9.392-25.612,22.154-29.182l3.127-9.889 l-28.328-97.33l-3.258-10.656H0V11.069h48.409l10.938,35.775h164.511l-12.944,103.769H86.197l-2.763,8.734 c4.192,2.995,7.594,7.025,9.822,11.722h74.432c4.864-10.252,15.313-17.36,27.395-17.36 C211.793,153.709,225.388,167.304,225.388,184.014z" />
                </svg>
            </Link>
        </div>
    )
}