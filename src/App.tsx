import './style/App.css'
import TitleSec from './sections/TitleSec'
import ProjectSec from './sections/ProjectSec'
import SkillsSec from './sections/SkillsSec'
import EducationSec from './sections/EducationSec'
import WorkSec from './sections/WorkSec'
import { useEffect, useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"

function App() {
    const [dark, setDark] = useState(false)
    const [lang, setLang] = useState("hr")

    useEffect(() => {
        document.body.classList.toggle("dark", dark)
    }, [dark])

    return (
        <>
            <TitleSec setDark={setDark} lang={lang} setLang={setLang} />
            <EducationSec lang={lang} />
            <WorkSec lang={lang} />
            <ProjectSec lang={lang} />
            <SkillsSec lang={lang} />
            <footer className='contact-footer'>
                <p className='contact-title'>
                    {lang === "hr" ? "Kontakt:" : "Contact:"}
                </p>
                <p className='contact-info'>
                    <a className="email" href="mailto:andrijamacek75@gmail.com">
                        <span>
                            <MdMailOutline />
                            andrijamacek75@gmail.com
                        </span>
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/andrija-ma%C4%8Dek-639918262/" target="_blank" rel="noopener noreferrer">
                        <span>
                            <FaLinkedin />
                            /in/andrija-maček
                        </span>
                    </a>
                </p>
                <p className='copyright'>
                    Copyright © 2026 Andrija Maček
                </p>
            </footer>
        </>
    )
}

export default App
