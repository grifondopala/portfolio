import '../../css/stack.css'

export function Stack(){
    return(
        <div className={'stack'} id={'stack'}>
             <h2 className={'title'}>Технологии</h2>
             <div className={'information'}>
                <p>Ниже перечислен Stack, на котором работаю:</p>
                <div className={'technology'}>
                    <p>React</p>
                    <p>Typescript</p>
                    <p>Tailwind</p>
                    <p>Golang (Gin, Gorm)</p>
                    <p>CSS (SCSS)</p>
                    <p>Next.js</p>
                    <p>Redux</p>
                    <p>PostgreSQL</p>
                </div>
                <p>Технологии, с которыми знаком на минимальном уровне:</p>
                <div className={'technology'}>
                    <p>Nest.js</p>
                    <p>Vue.js</p>
                    <p>Django</p>
                </div>
             </div>
        </div>
    )
}