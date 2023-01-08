//custom type definitions 
//sanity plugins
//every type has a basename, a post will extend base and, based in schemas author.js in schemaTypes.Each field has a block 
//type definition //BlogList.tsx
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
     _updatedAt: string;
};

interface Post extends Base{
    author: Author; 
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: 'image';
    asset: Reference
}

interface Slug {
    _type: 'slug';
    current: string
}

interface Reference {
    _ref: string;
    _type: "reference"
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Block {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string"
    current: string
}