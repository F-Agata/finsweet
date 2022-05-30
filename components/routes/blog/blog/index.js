import Box from "../../../../styles/Box";

import BlogHeader from "../BlogHeader";
import AllPosts from "../AllPosts";
import TryFetch from "../../components/routes/blogSinglePost/TryFetch";

const Blog = ({listPostsItems,  listLinksToImg}) => {

    return (
        <Box>
            <BlogHeader listPostsItems={listPostsItems}  listLinksToImg={ listLinksToImg}/>
            <AllPosts listPostsItems={listPostsItems}  listLinksToImg={ listLinksToImg}/>
            {/*<TryFetch/>*/}
        </Box>
    );
}

export default Blog;

export async function getStaticProps(context) {


    let listPostsItems;
    let  listLinksToImg;
    // console.log(listPostsItems, "listPostsItems w indexie bloga")

    await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((res) => res.json())
        .then(data => {
            // console.log('data', data)
            listPostsItems = data.data
        })
        .catch (err => console.log(err));

    await fetch("https://randomuser.me/api/?results=8")
        .then((res) => res.json())
        .then(data => {
            // console.log('data props', data.data)
            listLinksToImg = data.results
        })
        .catch (err => console.log(err));

    return {
        props: {listPostsItems: listPostsItems,  listLinksToImg:  listLinksToImg}, // will be passed to the page component as props
    }
}