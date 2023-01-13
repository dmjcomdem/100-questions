import React from "react";
import style from './Card.module.css'


export const CardError: React.FC = () => {
    return (
      <div
        className={`${style.card} ${style.cardError}`}
        style={{boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 10px'}}
      >
          <div className={style.logo} />
          Произошла ошибка при загрузки вопросов 🙁
      </div>
    );
};
