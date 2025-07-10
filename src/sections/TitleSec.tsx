import { FaRegSun, FaRegMoon } from "react-icons/fa"
import "../style/TitleSec.css"

function TitleSec({ setDark, lang, setLang }: { setDark: (d: boolean) => void, lang: string, setLang: (l: string) => void }) {
    return (
        <div className="title-sec">
            <div className="title-container">
                <h1>Andrija Maček, univ. bacc. ing. comp.</h1>
                <div className="dark-mode-toggle">
                    <button onClick={() => setDark(false)} id="sun-icon"><FaRegSun /></button>
                    <button onClick={() => setDark(true)} id="moon-icon"><FaRegMoon /></button>
                </div>
                <div className="language-toggle">
                    <button onClick={() => setLang("hr")} style={{color: lang == "hr" ? "var(--text)" : "var(--not-text)"}} id="croatian">HR</button>
                    <button onClick={() => setLang("en")} style={{color: lang == "en" ? "var(--text)" : "var(--not-text)"}} id="english">EN</button>
                </div>
            </div>
            <p className="title-description">
                {lang === "hr" ?
                "Student sam računarstva na Sveučilištu u Zagrebu, Fakultetu elektrotehnike i računarstva. Zainteresiran sam za programiranje, razvoj aplikacija za web i programsko inženjerstvo. Ovo je moja osobna stranica na kojoj možete pronaći informacije o mojim projektima, vještinama i obrazovanju." :
                "I am a computer science student at the University of Zagreb, Faculty of Electrical Engineering and Computing. I am passionate about programming, web development, and software engineering. This is my personal portfolio website where you can find information about my projects, skills, and education."}
            </p>
        </div>
    );
}

export default TitleSec