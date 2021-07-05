
import {Loader} from '../components/loader/index'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader/>
    </div>
  )
}
