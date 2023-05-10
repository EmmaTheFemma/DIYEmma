
"use client" // Shouldnt need to use it here.
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getBlog } from '../../../../../sanity/sanity-utils';


type Props = {
  params: { blog: string }
}


export default async function SingleBlog({ params }: Props /* & { metadata: any } */) {

  const slug = params.blog; // Because folder is named [blog]
  const blog = await getBlog(slug);

  const metadata = {
    title: blog.name,
    description: blog.description,
  }

  return (
    <div>
      <h1>{ blog.name }</h1>

      {blog.image && <Image src={blog.image.url} alt={blog.image.alt} width={500} height={400} />}

      <div><PortableText value={ blog.content } /></div>
    </div>
  )
};
