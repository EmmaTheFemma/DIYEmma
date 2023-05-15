import Image from "next/image";
import Link from "next/link";
/* import {useNextSanityImage} from 'next-sanity-image'; */

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            console.log("----- VALUE -----")
            console.log(value)
            console.log("-----------------")
            console.log("The URL: ", `https://cdn.sanity.io/images/01l9ccux/production/${value.asset._ref}`)
            return (<div className="test-testing"><Image src={`/_next/image?url=${encodeURIComponent(`/_next/image?url=${encodeURIComponent(value.asset._ref)}&w=1920&q=75`)}&w=1920&q=75`} alt={value.alt} fill /><h2>https://cdn.sanity.io/images/01l9ccux/production/{value.asset._ref}</h2></div>);
        }
    },

    list: {
        bullet: ({ children }: any) => (
            <ul>{ children }</ul>
        ),
        number: ({ children }: any) => (
            <ol>{ children }</ol>
        ),
    },

    block: {
        h1: ({ children }: any) => (
            <h2>{ children }</h2>
        ),
        h2: ({ children }: any) => (
            <h2>{ children }</h2>
        ),
        h3: ({ children }: any) => (
            <h3>{ children }</h3>
        ),
        h4: ({ children }: any) => (
            <h4>{ children }</h4>
        ),
        h5: ({ children }: any) => (
            <h5>{ children }</h5>
        ),
        h6: ({ children }: any) => (
            <h6>{ children }</h6>
        ),

        blockquote: ({ children }: any) => (
            <blockquote>{ children }</blockquote>
        )
    },

    marks: {
        link: ({ children, value }: any) => {
            const blank = !value.href.startsWith("/")
            ? "_blank"
            : undefined;
            return (
            <Link href={ value.href } target={ blank }>{ children }</Link>
        );}
    },

};