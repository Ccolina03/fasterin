import Image from "next/image";
import Link from "next/Link";
import urlFor from "../lib/urlFor";

export const RichTextComponent = {
    types: {
        image: ({value}) => <img src={value.imageUrl} />,
        callToAction: ({value, isInline}) =>
          isInline ? (
            <a href={value.url}>{value.text}</a>
          ) : (
            <div className="callToAction">{value.text}</div>
          ),
      },

      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="mt-lg">{children}</ol>,
    
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
      },
    
      marks: {
        link: ({children, value}) => {
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <a href={value.href} rel={rel}>
              {children}
            </a>
          )
        },
      },
    }
    
    const YourComponent = (props) => {
      return <PortableText value={props.value} components={myPortableTextComponents} />
}