import React from 'react'
import styles from './layout.module.css'
import poweredBy from 'img/powered-by.png';
import blueCurrent from 'img/blue-current-logo-blue-v-2.png';

export default function Layout() {
    return (
        <div className={styles.navBar}>
            <img src={poweredBy} className={styles.poweredBy} />
            <img src={blueCurrent} className={styles.logo} />
        </div>
    )
}
