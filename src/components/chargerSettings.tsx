import React from 'react'
import chargerImage from 'img/Laadpaal.png';
import styles from './chargerSettings.module.css'
import SettingCheck from './settingCheck';

export default function ChargerSettings() {
    return (
        <div className={styles.container}>
            <img src={chargerImage} className={styles.chargerImage} alt='charger' />
            <div className={styles.settings}>
                <SettingCheck setting='Laden met vaste kabel' />
                <SettingCheck setting='5 meter' />
                <SettingCheck setting='Op een paal' />
                <SettingCheck setting='Graafwerk' />
                <SettingCheck setting='Tot 6 meter' />
                <SettingCheck setting='Geen' />
                <div className={styles.priceDiv}>
                    <p>Jouw keuze</p>
                    <p className={styles.price}>€1.658</p>
                </div>
            </div>
        </div>
    )
}
