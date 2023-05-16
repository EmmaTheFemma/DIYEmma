import Image from "next/image";
import Link from "next/link";
import urlFor from "../../sanity/urlFor";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (<Image src={ urlFor(value.asset._ref).url() } alt={value.alt} width={700} height={400} quality={60} />);
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