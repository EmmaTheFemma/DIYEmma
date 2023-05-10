import { Blog } from "@/types/Blog";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getBlogs(): Promise<Blog[]> {


    return createClient(clientConfig).fetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": {
              "url": image.asset->url,
              "alt": image.alt
            },
            description,
            content

        }`
    )
};


export async function getBlog(slug: string): Promise<Blog> {
  
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      description,
      content
    }`,
    { slug }
  )
}