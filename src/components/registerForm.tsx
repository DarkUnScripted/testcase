import React from 'react'

import styles from './registerForm.module.css'
import { FaArrowRight } from 'react-icons/fa'
import InputField from './inputField'

export default function RegisterForm() {
    return (
        <div className={styles.container}>
            <form>
                <p className={styles.header}>Naam</p>
                <InputField label='Voornaam' labelSize='76px' />
                <InputField label='Achternaam' labelSize='85px' />
                <p className={styles.header}>Contact</p>
                <InputField label='Telefoonnummer' labelSize='110px' />
                <InputField label='E-mail' labelSize='55px' />
                <p className={styles.header}>Adres</p>
                <InputField label='Straatnaam + huisnr.' labelSize='130px' />
                <div className={styles.flex}>
                    <InputField label='Postcode' labelSize='76px' />
                    <InputField label='Plaats' labelSize='55px' />
                </div>
                <div className={styles.flex}>
                    <div className={`${styles.payButton} ${styles.flex}`}>
                        <p>Direct betalen</p> <FaArrowRight color='#0074e8' />
                    </div>
                    <p className={styles.invoice}>Stuur een offerte</p>
                </div>
                <p className={styles.payInfo}>Betalen via iDeal, Creditcard... etc.</p>
            </form>
        </div>
    )
}