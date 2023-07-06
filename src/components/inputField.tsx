import React from 'react'

import styles from './inputField.module.css'

type Props = {
    label: string;
    labelSize: string;
}

export default function InputField({ label, labelSize }: Props) {
    return (
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
            <input id="firstname" className={styles.input} type="text" placeholder=" " />
            <div className={styles.cut} style={{ width: labelSize }}></div>
            <label htmlFor="firstname" className={styles.placeholder}>{label}</label>
        </div>
    )
}