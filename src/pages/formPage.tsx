import Register from 'components/multiform-steps/register'
import { useMultistepForm } from 'hooks/useMultiStepForm'
import React from 'react'

import './formPage.css'
import ProgressBar from 'components/progressBar'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ChargerChoice from 'components/multiform-steps/chargerChoice'

export default function FormPage() {
    const {
        currentStepIndex,
        isFirstStep,
        back,
        next,
        step,
        amount,
        isLastStep,
        setCurrentStepIndex,
    } = useMultistepForm([
        <></>,
        <ChargerChoice />,
        <Register />
    ])

    return (
        <div className='container'>
            <form className='chargerForm'>
                <ProgressBar
                    max={amount}
                    current={currentStepIndex}
                />
                {step}
            </form>
            <div className='navigation'>
                <div className='prevButton' onClick={() => back()}><FaArrowLeft className='left' /> Vorige</div>
                {!isLastStep && <div className='nextButton' onClick={() => next()}>Volgende <FaArrowRight className='right' /></div>}
            </div>
        </div>
    )
}