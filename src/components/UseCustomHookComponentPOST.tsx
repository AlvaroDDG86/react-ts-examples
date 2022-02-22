import useFetchData from "../hooks/useFetchData"
import { Post } from "../domain/models/Post"

const UseCustomHookComponent = () => {
    const { data, error, done } = useFetchData<Post>('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })})

    if (!done) return <div>Loading...</div>

    if (error) return <div>{ error }</div>

    return (
        <div>
            { JSON.stringify(data) }
        </div>
    )
}

export default UseCustomHookComponent