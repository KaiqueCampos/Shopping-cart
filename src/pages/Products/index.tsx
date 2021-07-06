import { BannerLegend } from "../../components/BannerLegend"
import { BannerSneaker } from "../../components/BannerSneaker"
import { ProductsItems } from "../../components/ProductsItens"
import styles from './styles.module.scss'

export default function Products() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <BannerLegend/>
                <BannerSneaker/>
            </div>

            <ProductsItems/>
        </div>
    )
}