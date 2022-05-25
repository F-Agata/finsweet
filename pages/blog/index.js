import Box from "../../styles/Box";

import BlogHeader from "../../components/routes/blog/BlogHeader";
import AllPosts from "../../components/routes/blog/AllPosts";

const Blog = ({listPostsItems}) => {

    return (
        <Box>
            <BlogHeader listPostsItems={listPostsItems}/>
            <AllPosts listPostsItems={listPostsItems}/>
        </Box>
    );
}

export default Blog;

export async function getStaticProps(context) {


    let listPostsItems;
    console.log(listPostsItems, "listPostsItems w indexie bloga")

    await fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then(data => {
            // console.log('data', data)
            listPostsItems = data.results
        })
        .catch (err => console.log(err));

    return {
        props: {listPostsItems: listPostsItems}, // will be passed to the page component as props
    }
}