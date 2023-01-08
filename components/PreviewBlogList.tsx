'use client';

import {usePreview} from '../lib/sanity.preview'
import BlogList from "./BlogList"



//accept props (passing query in page.tsx)
type Props = {
    query: string,
};

//first value null, second query. Give post (unpublished/published)

export default function PreviewBlogList({query}: Props) {
    const posts=usePreview(null, query);
    //console.log("Loading posts...", posts);
    return <BlogList posts={posts}/> //abstraction mode for preview mode
}