import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { pid, wp } = router.query

    return <p>Post: {pid}, {wp}</p>
}

export default Post