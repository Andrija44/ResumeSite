import Education from "../components/Education"
import eduData from "../assets/education.json"
import eduDataCro from "../assets/education-cro.json"
import "../style/EducationSec.css"

function EducationSec({lang}: {lang: string}) {
    let data: any[] = []
    if (lang == "hr") {
        data = eduDataCro
    } else {
        data = eduData
    }

    return (
        <>
            <h2>{lang == "hr" ? "Obrazovanje" : "Education"}</h2>
            <div className="education-sec">
                {data.map((edu, index) => (
                    <Education key={index} education={{
                        name: edu.name,
                        location: edu.location,
                        startDate: edu["start-date"],
                        endDate: edu["end-date"],
                        degree: edu.degree,
                        thesis: edu.thesis,
                        lang: lang
                    }} />
                ))}
            </div>
        </>
    )
}

export default EducationSec