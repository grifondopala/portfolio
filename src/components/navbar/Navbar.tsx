import '../../css/navbar.css'

import { useState } from 'react';

export function Navbar(){

    const [isShown, setIsShown] = useState<boolean | null>(null);

    const hideNavbar = () => setIsShown(false);

    return(
        <div className={'navbar'}>
            <div className={'show-button'} onClick={() => setIsShown((value) => !value)}>
                <img src={'/photos/navbar/navigation-bar.png'}/>
            </div>
            <div className={`buttons-div ${isShown === null ? 'first' : isShown ? 'show-navbar' : 'hide-navbar'}`}>
                <div className={'buttons-div-h'}>
                    <a className={'button'} href={"#about"} onClick={hideNavbar}>
                        <label>Обо мне</label>
                    </a>
                    <a className={'button'} href={"#stack"} onClick={hideNavbar}>
                        <label>Технологии</label>
                    </a>
                    <a className={'button'} href={"#projects"} onClick={hideNavbar}>
                        <label>Проекты</label>
                    </a>
                    <a className={'button'} href={"#experience"} onClick={hideNavbar}>
                        <label>Опыт работы</label>
                    </a>
                    <a className={'button'} href={"#contacts"} onClick={hideNavbar}>
                        <label>Контакты</label>
                    </a>
                </div>
            </div>
        </div>
    )
}