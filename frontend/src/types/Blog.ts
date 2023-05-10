import { PortableTextBlock } from "sanity";


export type Blog = {
    _id: string;
    _createAt: Date;
    name: string;
    description: string;
    slug: string;
    image: {
        alt: string;
        url: string;
      };
    content: PortableTextBlock[];
}