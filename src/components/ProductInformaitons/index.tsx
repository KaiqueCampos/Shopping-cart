import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'

export function ProductInformations() {
    return (
        <div className={`${styles.container} ${animate.up}`}>
            <h1>Red Off-White</h1>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry{"'"}s standard dummy
                text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
            </p>

            <h2>R$: 4500,00</h2>

            <button>
                Buy
            </button>


        </div>
    )
}