import React, { useState } from 'react'
import styles from '../styles/BaseTextInputWithButton.module.css'
import BaseButton from "./BaseButton"

export default function BaseTextInputWithButton(props) {

    const [text, setText] = useState('');

    const onInput = (event) => {
        setText(event.target.value)
        console.log('Input')
    }

    const onClick = () => {
        props.onClick(text)
    }

    return(
        <div>
            <label htmlFor="newList" className={styles.label}>
                Type New List
            </label>

            <div className={styles['input-with-button']}>
            <input
                id={props.inputId}
                type="text"
                name={props.inputName}
                value={text}
                className={styles.input}
                placeholder={props.placeholder}
                onInput={onInput}
            />

            <BaseButton
                onClick={onClick}
                text={props.buttonText}
                type='primary'
            />
            </div>
        </div>
    )
}

