import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Counter from "./view/Counter";
import Posts from "./view/Posts";
import posts from "./store/Posts";
import * as API from "./API/index";

const MainRotes = () => {

    useEffect(
        () => {
            load();
        }, []
    )

    const load = async () => {
        const { data } = await API.getPosts();
        console.log(data, "postsData");
        posts.getAllPosts(data);
        // const promiseArray = [
        //   fetchMenus(),
        //   fetchCategories(),
        //   fetchItems(),
        //   fetchTags(),
        //   fetchAllergens(),
        //   fetchSubscription(),
        //   fetchModifierGroups(),
        //   fetchModifierItems()
        // ];

        // await Promise.all(promiseArray);
    };
    return (
        <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/posts" element={<Posts />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}
export default MainRotes