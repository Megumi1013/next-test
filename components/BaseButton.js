import React from 'react';
import styles from '../styles/BaseButton.module.css'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function BaseButton(props) {

    const onClick = (event) => {
        event.preventDefault()
        props.onClick()
    }

    const buttonClass = cx({
        button: true,
        'primary': props.type === 'primary',
        'secondary': props.type === 'secondary',
    });

    return(
        <button onClick={onClick} className={buttonClass}>
            {props.text}
        </button>
    )
}

