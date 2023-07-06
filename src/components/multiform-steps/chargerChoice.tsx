import TextBlock from 'components/textBlock'
import React from 'react'

import styles from './chargerChoice.module.css'
import { ChargerType } from 'types'
import TypeSelector from 'components/typeSelector'

import hiddenImage from 'img/hidden.png'
import uMoveImage from 'img/u-move.png'


export default function ChargerChoice() {
    const chargerTypes: ChargerType[] = [
        { name: "hidden", img: hiddenImage },
        { name: "U:Move", img: uMoveImage }
    ]

    return (
        <div className={styles.container}>
            <TextBlock
                title="Motorhuis laadpunt samenstellen"
                header="Wat voor laadpunt wil je?"
                subheader="Tekst"
            />
            <TypeSelector types={chargerTypes} />
        </div>
    )
}