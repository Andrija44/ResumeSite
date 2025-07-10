import Skills from "../components/Skills"
import "../style/SkillsSec.css"
import skillData from "../assets/skills.json"
import skillDataCro from "../assets/skills-cro.json"

function SkillsSec({lang}: {lang: string}) {
    type Skill = { name: string; icon: string }
    type SkillSet = { [category: string]: Skill[] }

    const skills: SkillSet = lang == "hr" ? skillDataCro : skillData

    return (
        <>
            <h2>{lang == "hr" ? "Vještine" : "Skills"}</h2>
            <div className="skills-sec">
                {Object.entries(skills).map(([category, skillList]) => (
                    <Skills key={category} skill={{ name: category, elements: skillList }} />))}
            </div>
        </>
    )
}

export default SkillsSec