import './style/App.css'
import TitleSec from './sections/TitleSec'
import ProjectSec from './sections/ProjectSec'
import SkillsSec from './sections/SkillsSec'
import EducationSec from './sections/EducationSec'
import WorkSec from './sections/WorkSec'
import { useEffect, useState } from "react"

function App() {
    const [dark, setDark] = useState(true)
    const [lang, setLang] = useState("hr")

    useEffect(() => {
        document.body.classList.toggle("dark", dark)
    }, [dark])

    return (
        <>
            <TitleSec setDark={setDark} lang={lang} setLang={setLang} />
            <ProjectSec lang={lang} />
            <SkillsSec lang={lang} />
            <EducationSec lang={lang} />
            <WorkSec lang={lang} />
        </>
    )
}

export default App
