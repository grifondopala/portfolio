import '../../css/main.css'

import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "./Header";
import { About } from "./About";
import { Stack } from "./Stack"
import { Projects } from './Projects';
import { Contacts } from './Contacts';

export function Main(){
    return(
        <>
            <Navbar />
            <div className={'container'}>
                <Header />
            </div>    
            <About />
            <div className={'container'}>
                <Stack />
                <Projects />
                <Contacts />
            </div>    
        </>
    )
}