import React from 'react'
import RegisterForm from '../registerForm'
import TextBlock from 'components/textBlock'
import ChargerSettings from 'components/chargerSettings'

import styles from './register.module.css'

export default function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <TextBlock
                    title="Motorhuis laadpunt samenstellen"
                    header="Gefeliciteerd!"
                    subheader="Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw settings door. Tot snel!"
                />
                <ChargerSettings />
            </div>
            <RegisterForm />
        </div>
    )
}