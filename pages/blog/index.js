import Box from '../../styles/Box'

import BlogHeader from '../../components/routes/blog/BlogHeader'
import AllPosts from '../../components/routes/blog/AllPosts'

const Blog = ({ listPostsItems, listLinksToImg }) => {
  return (
    <Box>
      <BlogHeader
        listPostsItems={listPostsItems}
        listLinksToImg={listLinksToImg}
      />
      <AllPosts
        listPostsItems={listPostsItems}
        listLinksToImg={listLinksToImg}
      />
    </Box>
  )
}

export default Blog

export async function getStaticProps(context) {
  let listPostsItems
  let listLinksToImg

  await fetch(
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
  )
    .then((res) => res.json())
    .then((data) => {
      listPostsItems = data.data
    })
    .catch((err) => console.log(err))

  await fetch('https://randomuser.me/api/?results=8')
    .then((res) => res.json())
    .then((data) => {
      listLinksToImg = data.results
    })
    .catch((err) => console.log(err))

  return {
    props: { listPostsItems: listPostsItems, listLinksToImg: listLinksToImg }, // will be passed to the page component as props
  }
}
