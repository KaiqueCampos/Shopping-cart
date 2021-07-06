import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'

export function BannerSneaker(){
    return(
        <div className={`${styles.container} ${animate.up}`}>
            <h1>AIR</h1>
            <img src="./sneakerBanner.png" alt="Air Jordan 4 Paris-Saint Germain" />
            <h1 className={styles.titleCustomDesign}>JORDAN</h1>
            <h3>Paris-Saint Germain</h3>
        </div>
    )
}