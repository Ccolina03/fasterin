import urlFor from "../lib/urlFor";
import Image from "next/image";
type Props = {
    posts: Post[]; //all array of posts
};

function BlogList({posts}: Props) {
   return (
         <div>
            <hr className= "border-[#F7AB0A] mb-10" />
            <div>
                {/* Posts */}
                {posts.map((post) => (
                    <div key={post._id} className='flex flex-col group cursor-pointer'>
                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200-ease-out">
                        <Image
                                className = "object-cover object-left lg:object_center"
                                src = {urlFor(post.mainImage).url()}
                                alt = {post.author.name}
                                fill
                            />
                        </div>
                    </div>
                ))}
            </div>                
        </div>
   )
}

export default BlogList