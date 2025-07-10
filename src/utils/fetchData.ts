import { useEffect, useState } from "react"

const CACHE_DURATION = 20 * 60 * 1000

export function useFetchWithCache<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const cached = localStorage.getItem(import.meta.env.VITE_CACHE_KEY)
        if (cached) {
            const { timestamp, data } = JSON.parse(cached)
            if (Date.now() - timestamp < CACHE_DURATION) {
                setData(data)
                setLoading(false)
                return
            }
        }

        fetch(url)
            .then((res) => res.json())
            .then((fetchedData) => {
                setData(fetchedData)
                localStorage.setItem(
                    import.meta.env.VITE_CACHE_KEY,
                    JSON.stringify({ timestamp: Date.now(), data: fetchedData })
                )
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [url])

    return { data, loading, error }
}
