import { useEffect, useRef, useState } from 'react'

import '../../css/about.css'

export function About(){

    const informationRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {

        const child = informationRef.current as HTMLDivElement;

        const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);  
        });
      
        observer.observe(child);
      
        return () => observer.unobserve(child);
    }, [])

    return(
        <div className={'about'} id={'about'}>
            <h2 className={'title'}>Обо <label>мне</label></h2>
            <div className={'information'} ref={informationRef}>
                <p>Добрый день, меня зовут Григорий. Мне 20 лет и я обучаюсь на третьем курсе
                   университета НИЯУ МИФИ на направлении "Прикладная математика и информатика". <br/>
                   Увлекся программированием ещё в школьные годы и долго искал своё направление:
                   писал игры на Unity, Android приложения на Java и Kotlin, десктопные
                   приложения на C#. В конечном итоге, я нашел дело, к которому по&nbsp;-&nbsp;настоящему лежит моя душа:
                   разработка Веб&nbsp;-&nbsp;Сервисов. Больше всего интересна Frontend часть данного направления, чем я 
                   сейчас активно и занимаюсь. <br/>
                </p>
                <div id={'photo'} className={isIntersecting ? 'showPhoto' : ''}/>
            </div>
        </div>
    )
}