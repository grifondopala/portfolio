import '../../css/projects.css'

export function Projects(){
    return(
        <div className={'projects'} id={'projects'}>
            <p className={'title'}>Проекты</p>
            <div className={'information'}>
                <div className={'project'}>
                    <div className={'project_info'} onClick={() => window.location.href = "https://github.com/grifondopala/nike_shop"}>
                        <p className={'project_title'}>Nike Shop</p>
                        <p>Как следует из названия, данный проект является копией интернет-магазина nike.com. Был реализован основной функционал: </p>
                        <div className={'points'}>
                            <p>Список всей одежды. Фильтрация по гендеру, типу, цене. Сортировка по цене и новизне.</p>
                            <p>Страница одежды.</p>
                            <p>Понравившаяся одежда.</p>
                            <p>Корзина.</p>
                            <p>Регистрация и авторизация. Аунтетификация по JWT Token-у.</p>
                        </div>
                        <p>Больше всего интересно было реализовывать главную страницу и элементы прокрутки (бесконечную и конечную), подходящие под разные типы данных.</p>
                        <div className={"technologies"}>
                            <p className={'ts'}>Typescript</p>
                            <p className={'go'}>Golang</p>
                            <p>Next.js</p>
                            <p>Tailwind</p>
                        </div>
                    </div>
                    <div className={"photo nike"}>
                        
                    </div>
                </div>
                <div className={'project'}>
                    <div className={'project_info'} onClick={() => window.location.href = "https://github.com/grifondopala/schedule"}>
                        <p className={'project_title'}>Schedule</p>
                        <p>Вдохновился на данный проект с сайта app.asana.com. Задача сайта - создание предстоящих тасков по проекту и контроль за их выполнение.</p>
                        <div className={'points'}>
                            <p>Регистрация / авторизация.</p>
                            <p>Создание проекта и список проектов пользователя.</p>
                            <p>Таблица с тасками.</p>
                            <p>Возможность разбивать таски на секции.</p>
                        </div>
                        <div className={"technologies"}>
                            <p className={'ts'}>Typescript</p>
                            <p className={'go'}>Golang</p>
                            <p className={'react'}>React</p>
                            <p>Tailwind</p>
                        </div>
                    </div>
                    <div className={"photo schedule"}>
                        
                    </div>
                </div>
                <div className={'project'}>
                    <div className={'project_info'} onClick={() => window.location.href = "https://github.com/grifondopala/picture-shop"}>
                        <p className={'project_title'}>Picture Shop</p>
                        <p>Один из самых первых проектов. Выполнен по шаблону фигма.</p>
                        <div className={'points'}>
                            <p>Cписок всех картин.</p>
                            <p>Фильтрация (все / проданные).</p>
                            <p>Поиск по названию.</p>
                            <p>Добавление в корзину.</p>
                        </div>
                        <div className={"technologies"}>
                            <p className={'ts'}>Typescript</p>
                            <p className={'react'}>React</p>
                            <p>Nest.js</p>
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className={"photo picture_shop"}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}