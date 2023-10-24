import '../../css/contacts.css'

export function Contacts(){
    return(
        <div className={'contacts'} id={'contacts'}>
            <h2 className={'title'}>Контакты</h2>
            <div className={'information'}>
                <p id={'telegram'}>Godlike03</p>
                <p id={'phone'}>+7(919)993-58-69</p>
                <p id={'mail'}>Grifondopala@gmail.com</p>
            </div>
        </div>
    )
}