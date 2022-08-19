import Box from "../../styles/Box";
import SinglePost from "../../components/routes/blogSinglePost/SinglePost";
import ReadMorePosts from "../../components/routes/blogSinglePost/ReadMorePosts";

const ChoicePost = ({chosenPost, listPostsItems,  listLinksToImg }) => {

    // console.log('chosenPost', chosenPost)
    // console.log(listPostsItems)

    return (
        <Box>
            {chosenPost && <SinglePost chosenPost={chosenPost} listLinksToImg={listLinksToImg}/>}
            {listPostsItems && <ReadMorePosts listPostsItems={listPostsItems} listLinksToImg={listLinksToImg}/>}
        </Box>
    );
}

export default ChoicePost;

export async function getStaticPaths() {

    let listPostsItems;

    await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((res) => res.json())
        .then(data => {
            // console.log('data paths', data.data)
            listPostsItems = data.data
        })
        .catch (err => console.log(err));

    const paths = [];

    listPostsItems.forEach((item)=>{
        paths.push({params: {slug: `${listPostsItems['ID Year']}`}})
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
    let listLinksToImg;
    // console.log(listPostsItems, "listPostsItems")

    await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((res) => res.json())
        .then(data => {
            // console.log('data props', data.data)
            listPostsItems = data.data
        })
        .catch (err => console.log(err));

    // const chosenPost = listPostsItems.find((item) => item['ID Year'].toString() === slug)
    const chosenPost = listPostsItems.find((item) => `${item['ID Year']}` === slug);
     // console.log(chosenPost)
    // console.log(chosenPost['ID Year'])


    await fetch("https://randomuser.me/api/?results=8")
        .then((res) => res.json())
        .then(data => {
            // console.log('data props', data.data)
            listLinksToImg = data.results
        })
        .catch (err => console.log(err));



    return {
        props: {chosenPost: chosenPost, listPostsItems: listPostsItems, listLinksToImg: listLinksToImg} // will be passed to the page component as props
    }
}

