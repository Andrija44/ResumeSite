function Education({education}: {education: {name: string, location: string, startDate: string, endDate: string, degree: string, thesis?: string, lang: string}}) {
    return (
        <>
            <div className="education-element">
                <div className="education-header">
                    <h3>{education.name}, {education.location}</h3>
                    <h4>{education.startDate} - {education.endDate}</h4>
                </div>
                <p>{education.degree}</p>
                {education.thesis && <p>{education.lang == "hr" ? "Završni rad:" : "Thesis:"} {education.thesis}</p>}
            </div>
        </>
    )

}

export default Education