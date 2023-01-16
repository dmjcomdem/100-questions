'use client';
import React from 'react';
import style from './QuestionCard.module.css';

export default function Error() {
    return (
        <div className={`${style.card} ${style.cardError}`}>
            <div className={style.logo} />
            <p>
                Ошибка при инициализации приложения 🙁
            </p>
        </div>
    );
}
