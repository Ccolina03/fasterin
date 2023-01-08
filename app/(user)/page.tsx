import {previewData} from 'next/headers'
import {groq} from "next-sanity"
import {client} from "../../lib/sanity.client"
import { PreviewSuspense } from 'next-sanity/preview'

const query = groq `
*[_type=='post']{ //get me all the types of post
    ..., //getting all fills and references(author, categories)
    author->,categories[]->} | order(_createdAt desc)`  //ordering by creator


//Two scenarios: preview mode or not
export default async function HomePage() {
        if (previewData()) {
            return (<PreviewSuspense 
                fallback={(
                <div role="status">
                    <p className="text-center text-lg animate-pulse text-[#F7AB0A]"> 
                    Loading Preview Data...
                    </p> </div>
            )}></PreviewSuspense>)
        }


        const posts= await client.fetch(query)
        return (
        <div>
            <h1>
                Not in preview mode
            </h1>
        </div>
    );
}