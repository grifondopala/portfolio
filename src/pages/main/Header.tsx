import '../../css/header.css'

export function Header(){
    return(
        <div className={'header'}>
            <p className={'hello-text'}>Добрый день! Меня зовут</p>
            <p className={'name-text'}>Григорий Григорян.</p>
            <p className={'job-text'}>Frontend React Developer.</p>
            <p className={'description-text'}>Занимаюсь разработкой веб-сервисов с сентября 2022 года.
                За это время успел поработать с многими фреймворками и библиотеками, как для клиентской, так и для
                серверной частей. В данный момент моё основное направление - Frontend разработка 
                на <label>React</label> и <label>Typescript</label>.</p>
        </div>
    )
}