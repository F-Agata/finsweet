import Box from "../../styles/Box";

import BlogHeader from "../../components/routes/blog/BlogHeader";
import AllPosts from "../../components/routes/blog/AllPosts";

const Blog = () => {

    return (
        <Box>
            <BlogHeader/>
            <AllPosts/>
        </Box>
    );
}

export default Blog;
