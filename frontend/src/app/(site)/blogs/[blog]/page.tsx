import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getBlog, getBlogs } from '../../../../../sanity/sanity-utils';
import '../../../../styles/pages/main-article.css';
import { RichTextComponents } from '@/components/RichTextComponents';
import moment from "moment";


type Props = {
  params: { blog: string }
}

export const revalidate = 60; //Revalidates webpage ever X sec.

// Makes it static!!
export async function generateStaticParams() {
  const blogs = await getBlogs();
  const slugRoutes = blogs.map((slug) => slug.slug );
  

  return slugRoutes.map( slug => ({
    blog: slug, // blog as in [blog]
  }));

}


export async function generateMetadata({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  if (!blog) throw new Error("Page not found... damn it")

  const metadata = {
    title: blog.name,
    description: blog.description,
  };
  return metadata;
}

export default async function SingleBlog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <article className='small-container main-article'>
      <h1>{ blog.name }</h1>

      {/* <p>{ moment(blog._createAt).format("MMMM DD, YYYY") } / Not working...</p> */}
      {/* <p>{ moment(blog._updatedAt).format("MMMM DD, YYYY") } / Not working...</p> */}
      {/* <p>{ new Date(blog._createAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric"}) } / Please work...</p> */}

      <div className="main-article-banner-container">
        {blog.image && <Image src={blog.image.url} alt={blog.image.alt} priority quality={60} fill/>}
      </div>

      <p className="article-description">{ blog.description }</p>

      <div className='main-article-content'>
        <PortableText value={ blog.content } components={ RichTextComponents } />
      </div>
    </article>
  )
};