import React from 'react';
import s from'./Header.module.css';

const Header = () =>{
    return <header className={s.header}>
            <img src={'https://dota2.ru/img/heroes/jakiro/portrait.jpg'}/>
    </header>
}
export default Header;