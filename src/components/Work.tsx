
function Work({work}: {work: {name: string, location: string, startDate: string, endDate: string, position: string, description: string[]}}) {
  return (
    <>
        <div className="work-element">
            <div className="work-header">
                <h3>{work.name}, {work.location}</h3>
                <h4>{work.startDate} - {work.endDate}</h4>
            </div>
            <p>{work.position}</p>
            <div>
                <ul>
                    {work.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  );
}

export default Work