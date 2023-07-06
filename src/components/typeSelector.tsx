import React, { useState } from 'react'

import styles from './typeSelector.module.css'
import { ChargerType } from 'types'
import { FaCheck, FaTimes } from 'react-icons/fa'

type Props = {
    types: ChargerType[]
}

export default function TypeSelector({ types }: Props) {
    const [selected, setSelected] = useState("hidden")

    return (
        <div className={styles.container}>
            {types.map((type) =>
                <div key={type.name} className={`${styles.card} ${type.name === selected ? styles.selected : ''}`} onClick={() => setSelected(type.name)}>
                    <img src={type.img} alt={`${type.name} charger`} className={styles.image} />
                    <div className={styles.blur}>
                        <div className={styles.cardInfo}>
                            <div className={styles.checkmark}>
                                {selected === type.name ? <FaCheck color='#3399ff' /> : <FaTimes color='#eef7ff' />}
                            </div>
                            <p className={styles.name}>{type.name}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}