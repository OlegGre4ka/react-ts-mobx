import { observer } from "mobx-react-lite";
import posts from "./../../store/Posts";

const Posts = observer(() => {
    const { posts: postsData } = posts;
    return (
        <>
            <h3>Posts</h3>

            {postsData.map(item => <div key={item.id}>
                {item.id}.{item.title}
            </div>)}
        </>

    )
})

export default Posts