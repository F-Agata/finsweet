import Box from "../../styles/Box";
import SinglePost from "../../components/routes/blogSinglePost/SinglePost";
import ReadMorePosts from "../../components/routes/blogSinglePost/ReadMorePosts";
import TryFetch from "../../components/routes/blogSinglePost/TryFetch";

const ChoicePost = ({chosenPost, listPostsItems }) => {

    console.log(chosenPost)
    console.log(listPostsItems)

    return (
        <Box>
            {/*<SinglePost/>*/}
            {/*<ReadMorePosts/>*/}
            <SinglePost chosenPost={chosenPost}/>
            <ReadMorePosts listPostsItems={listPostsItems}/>
            <TryFetch/>
        </Box>
    );
}

export default ChoicePost;

export async function getStaticPaths() {

    let listPostsItems;

    await fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then(data => {
            console.log('data.results', data.results)
            listPostsItems = data.results
        })
        .catch (err => console.log(err));

    const paths = [];

    listPostsItems.forEach((item)=>{
        paths.push({params: {slug: `${item.name.last}`}})
    })

    return {
        paths,
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {

    const slug = context.params?.slug

    // const productInfoItems = products

    let listPostsItems;
    // console.log(listPostsItems, "listPostsItems")

    await fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then(data => {
            // console.log('data.results', data.results)
            listPostsItems = data.results
        })
        .catch (err => console.log(err));

    const chosenPost = listPostsItems.find((item) => item.name.last === slug)
    // const chosenPost = listPostsItems.find((item) => {console.log(item.name.last, slug)})

    // console.log(chosenPost)

    return {
        props: {chosenPost: chosenPost, listPostsItems: listPostsItems} // will be passed to the page component as props
    }
}

