import Project from "../components/Project"
import "../style/ProjectSec.css"
import { useEffect, useState } from "react"
import { useFetchWithCache } from "../utils/fetchData"

function ProjectSec({ lang }: { lang: string }) {
    const { data, loading, error } = useFetchWithCache<any[]>(
        "https://api.github.com/users/Andrija44/repos")
    const [projects, setProjects] = useState<any[]>([])

    useEffect(() => {
        if (!data) return

        const fetchLanguages = async () => {
            const updated = await Promise.all(
                data.map(async proj => {
                    if (!proj.language) {
                        const res = await fetch(proj.languages_url)
                        const langs = await res.json()
                        return { ...proj, language: Object.keys(langs)[0] || "Unknown" }
                    }
                    return proj
                })
            )
            setProjects(updated)
            localStorage.setItem(
                import.meta.env.VITE_CACHE_KEY,
                JSON.stringify({ timestamp: Date.now(), data: updated })
            )
        }

        fetchLanguages()
    }, [data])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!data) return null

    return (
        <>
            <h2>{lang == "hr" ? "Projekti" : "Projects"}</h2>
            <div className="proj-grid">
                {projects.map((proj: any) => (
                    <Project
                        key={proj.id}
                        project={{
                            name: proj.name,
                            description: proj.description || 'No description available',
                            url: proj.html_url,
                            lang: proj.language
                        }}
                        lang={lang}
                    />
                ))}
            </div>
            {lang == "hr" ?
            <p className="git-more">Za više informacija posjetite moj <a className="git-info" href="https://github.com/Andrija44">GitHub</a></p> : 
            <p className="git-more">For more info check out my <a className="git-info" href="https://github.com/Andrija44">GitHub</a></p>}
            
        </>
    )
}

export default ProjectSec