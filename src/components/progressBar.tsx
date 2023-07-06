import React from 'react'

import styles from './progressBar.module.css'

type ProgressBarProps = {
    max: number
    current: number
}

export default function ProgressBar({ max, current }: ProgressBarProps) {
    return (
        <div className={styles.bar}>
            <div className={styles.filled} style={{ width: `${15 / max * (current + 1)}rem` }} />
            <div className={styles.progressIndicator} style={{ left: `${15 / max * (current + 0.75)}rem` }}>
                <p className={styles.progressCount}>{current + 1}/{max}</p>
            </div>
        </div>
    )
}
