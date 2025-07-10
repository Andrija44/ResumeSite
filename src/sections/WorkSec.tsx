import workData from '../assets/work.json'
import workDataCro from '../assets/work-cro.json'
import Work from '../components/Work'
import "../style/WorkSec.css"

function WorkSec({lang}: {lang: string}) {
    return (
        <div className="work-section">
            <h2>{lang == "hr" ? "Radno Iskustvo" : "Work Experience"}</h2>
            <div className="work-container">
                {(lang == "hr" ? workDataCro : workData).map((work, index) => (
                    <Work key={index} work={{
                        name: work.name,
                        location: work.location,
                        startDate: work['start-date'],
                        endDate: work['end-date'],
                        position: work.position,
                        description: work.description
                    }} />
                ))}
            </div>
        </div>
    );
}

export default WorkSec