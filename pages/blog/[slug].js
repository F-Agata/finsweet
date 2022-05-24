import Box from "../../styles/Box";
import SinglePost from "../../components/routes/blogSinglePost/SinglePost";
import ReadMorePosts from "../../components/routes/blogSinglePost/ReadMorePosts";



const ChoicePost = () => {

    // console.log(chosenProduct)

    return (
        <Box>
            <SinglePost/>
            <ReadMorePosts/>
        </Box>
    );
}

export default ChoicePost;

// export async function getStaticPaths() {
//
//     // const productInfoItems = products;
//
//     let productInfoItems;
//     // console.log(productInfoItems, "productInfoItems")
//
//     await fetch("http://localhost:4000/data")
//         .then((res) => res.json())
//         .then(data => {
//             // console.log('data', data)
//             productInfoItems = data
//         })
//         .catch (err => console.log(err));
//
//     const paths = [];
//
//     productInfoItems.forEach((product)=>{
//         paths.push({params: {slug: `${product.id}`}})
//     })
//
//
//     return {
//         paths
//         ,
//         fallback: true // false or 'blocking'
//     };
// }
//
// export async function getStaticProps(context) {
//
//     const slug = context.params?.slug
//
//     // const productInfoItems = products
//
//     let productInfoItems;
//     // console.log(productInfoItems, "productInfoItems")
//
//     await fetch("http://localhost:4000/data")
//         .then((res) => res.json())
//         .then(data => {
//             // console.log('data', data)
//             productInfoItems = data
//         })
//         .catch (err => console.log(err));
//
//     const chosenProduct = productInfoItems.find((item) => item.id === slug)
//
//     return {
//         props: {chosenProduct: chosenProduct}, // will be passed to the page component as props
//     }
// }
