import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'

export function BannerLegend() {
    return (
        <div className={`${styles.container} ${animate.up}`}>
            <h3>NEW RELEASE</h3>
            <h1>New Air Jordan 4</h1>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry{"'"}s
            </p>

            <button>
                View Air Jordan
            </button>
        </div>
    )
}