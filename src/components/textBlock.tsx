import React from 'react'
import styles from './textBlock.module.css'

type Props = {
    title: string
    header: string
    subheader: string
}

export default function TextBlock({ title, header, subheader }: Props) {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{title}</h4>
            <h1 className={styles.header}>{header}</h1>
            <p className={styles.subheader}>{subheader}</p>
        </div>
    )
}
