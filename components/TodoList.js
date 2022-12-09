import React, { useState } from 'react'
import styles from '../styles/TodoList.module.css'
import BaseButton from './BaseButton'

export default function TodoList(props) {

    const onRemoveTodo = (id) => {
        props.onRemoveTodo(id)
    }

    return(
        <div className={styles['wrapper']}>

            {props.items.length ? (
                    <ul>{props.items.map(item => (
                        <li key={item.id} className={styles.list}>
                            {item.text}

                            <BaseButton
                            text='Remove'
                            onClick={() => onRemoveTodo(item.id)}
                            type='secondary'
                            />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>
                        Nothing to do so far!
                    </div>
                )
            }
        </div>
    )
}