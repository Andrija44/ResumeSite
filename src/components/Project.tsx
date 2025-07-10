import { FaCode } from "react-icons/fa6"

function Project({ project, lang }: { project: { name: string; description: string; url: string; lang: any[] }; lang: string }) {
	return (
		<div className="project">
			<a href={project.url} target="_blank" className={`project-link ${lang == "hr" ? "hr" : "en"}`}>
				<h3>{project.name}</h3>
				{lang == "hr" && <p>{project.description}</p>}
				<div className="project-meta">
					<FaCode />
					<p>{project.lang}</p>
				</div>
			</a>
		</div>
	)
}

export default Project