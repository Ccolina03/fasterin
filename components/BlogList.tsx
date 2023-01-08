type Props = {
    posts: Post[]; //all array of posts
};

function BlogList({posts}: Props) {
    console.log(posts.length)
    return <div>BlogList1</div>
    
}

export default BlogList