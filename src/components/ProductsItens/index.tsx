import { useEffect } from 'react';
import Script from 'next/script'
import styles from './styles.module.scss'

export function ProductsItems() {


    return (
        <div className={styles.container}>

            <div className={styles.productsContainer}>
                <div className='products'>
                    <h1>Off-White Red</h1>
                    <h3>AIR JORDAN 1 Retrô</h3>

                    <img src='./product1.png' alt="Air Jordan 1 retrô | Red off-white" />
                </div>

                <div className='products'>
                    <h1>Off-White Red</h1>
                    <h3>AIR JORDAN 1 Retrô</h3>

                    <img src='./product2.png' alt="Air Jordan 1 retrô | Red off-white" />
                </div>

                <div className='products'>
                    <h1>Red Off-White</h1>
                    <h3>AIR JORDAN 1 Retrô</h3>

                    <img src='./product3.png' alt="Air Jordan 1 retrô | Red off-white" />
                </div>

                <div className='products'>
                    <h1>Orange Metalic</h1>
                    <h3>AIR JORDAN 1 Retrô</h3>

                    <img src='./product4.png' alt="Air Jordan 1 retrô | Red off-white" />
                </div>

                <div className='products'>
                    <h1>Off-White Red</h1>
                    <h3>AIR JORDAN 1 Retrô</h3>

                    <img src='./product5.png' alt="Air Jordan 1 retrô | Red off-white" />
                </div>

                <div className='products'>
                    <h1>Red Off-White</h1>
                    <h3>AIR JORDAN 1 Retrô</h3>

                    <img src='./product6.png' alt="Air Jordan 1 retrô | Red off-white" />
                </div>
            </div>

            <Script src="https://unpkg.com/scrollreveal" />
        </div>
    )
}