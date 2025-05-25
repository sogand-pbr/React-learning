// Home.jsx
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Home = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['cat'],
        queryFn: () => axios.get('https://catfact.ninja/fact').then(res => res.data)
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error fetching data 😥</p>

    return (
        <div>
            <h1>This is home</h1>
            <p>{data?.fact}</p>
        </div>
    )
}

export default Home
