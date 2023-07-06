import React from 'react'
import { FaCheck } from 'react-icons/fa'

import styles from './chargerSettings.module.css'

type Props = {
    setting: string
}

export default function SettingCheck({ setting }: Props) {
    return (
        <div className={styles.setting}><FaCheck color="#3399ff" /> {setting}</div>
    )
}
